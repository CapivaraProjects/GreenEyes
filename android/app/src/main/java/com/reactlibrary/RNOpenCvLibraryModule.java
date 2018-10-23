package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.google.gson.Gson;
import com.greeneyes.models.Analysis;
import com.greeneyes.models.AnalysisResult;
import com.greeneyes.models.DataWrapper;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

import org.opencv.core.CvType;
import org.opencv.core.Mat;

import org.opencv.android.Utils;
import org.opencv.core.Point;
import org.opencv.core.Scalar;
import org.opencv.imgproc.Imgproc;

import android.telecom.Call;
import android.util.Base64;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class RNOpenCvLibraryModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNOpenCvLibraryModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNOpenCvLibrary";
    }

    /**
     * Draw rectangle o image
     * @param imageAsBase64 Image base64
     * @param baseResponse base response from analysis read
     * @param errorCallback error callback
     * @param successCallback success callback
     */
    @ReactMethod
    public void draw_rectangle(
            String imageAsBase64,
            String baseResponse,
            Callback errorCallback,
            Callback successCallback) {
        HashMap<Integer, List<Integer>> colors = new HashMap<>();
        ArrayList alternaria = new ArrayList<Integer>();
        alternaria.add(255);
        alternaria.add(0);
        alternaria.add(0);
        colors.put(53, alternaria);
        ArrayList xanthomonas = new ArrayList<Integer>();
        xanthomonas.add(0);
        xanthomonas.add(0);
        xanthomonas.add(255);
        colors.put(52, xanthomonas);
        ArrayList tetranychus = new ArrayList<Integer>();
        tetranychus.add(212);
        tetranychus.add(66);
        tetranychus.add(244);
        colors.put(56, xanthomonas);
        try {
            DataWrapper dataWrapper = new Gson().fromJson(baseResponse, DataWrapper.class);
            for (AnalysisResult result : dataWrapper.baseResponse.response.analysis_results) {
                BitmapFactory.Options options = new BitmapFactory.Options();
                options.inDither = true;
                options.inPreferredConfig = Bitmap.Config.ARGB_8888;

                byte[] decodedString = Base64.decode(imageAsBase64, Base64.DEFAULT);
                Bitmap image = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
                Mat matImage = new Mat();
                Utils.bitmapToMat(image, matImage);
                Imgproc.rectangle(
                        matImage,
                        new Point(result.frame.get(2), result.frame.get(0)),
                        new Point(result.frame.get(3), result.frame.get(1)),
                        new Scalar(colors.get(result.id).get(0), colors.get(result.id).get(1), colors.get(result.id).get(2)));
                Utils.matToBitmap(matImage, image);
                ByteArrayOutputStream stream = new ByteArrayOutputStream();
                image.compress(Bitmap.CompressFormat.PNG, 100, stream);
                byte[] byteArray = stream.toByteArray();
                image.recycle();

                imageAsBase64 = new String(Base64.encode(byteArray, Base64.DEFAULT));
            }
            successCallback.invoke(imageAsBase64);
        } catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }

    @ReactMethod
    public void checkForBlurryImage(String imageAsBase64, Callback errorCallback, Callback successCallback) {
        try {
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inDither = true;
            options.inPreferredConfig = Bitmap.Config.ARGB_8888;

            byte[] decodedString = Base64.decode(imageAsBase64, Base64.DEFAULT);
            Bitmap image = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);


//      Bitmap image = decodeSampledBitmapFromFile(imageurl, 2000, 2000);
            int l = CvType.CV_8UC1; //8-bit grey scale image
            Mat matImage = new Mat();
            Utils.bitmapToMat(image, matImage);
            Mat matImageGrey = new Mat();
            Imgproc.cvtColor(matImage, matImageGrey, Imgproc.COLOR_BGR2GRAY);

            Bitmap destImage;
            destImage = Bitmap.createBitmap(image);
            Mat dst2 = new Mat();
            Utils.bitmapToMat(destImage, dst2);
            Mat laplacianImage = new Mat();
            dst2.convertTo(laplacianImage, l);
            Imgproc.Laplacian(matImageGrey, laplacianImage, CvType.CV_8U);
            Mat laplacianImage8bit = new Mat();
            laplacianImage.convertTo(laplacianImage8bit, l);

            Bitmap bmp = Bitmap.createBitmap(laplacianImage8bit.cols(), laplacianImage8bit.rows(), Bitmap.Config.ARGB_8888);
            Utils.matToBitmap(laplacianImage8bit, bmp);
            int[] pixels = new int[bmp.getHeight() * bmp.getWidth()];
            bmp.getPixels(pixels, 0, bmp.getWidth(), 0, 0, bmp.getWidth(), bmp.getHeight());
            int maxLap = -16777216; // 16m
            for (int pixel : pixels) {
                if (pixel > maxLap)
                    maxLap = pixel;
            }

//            int soglia = -6118750;
            int soglia = -8118750;
            if (maxLap <= soglia) {
                System.out.println("is blur image");
            }

            successCallback.invoke(maxLap <= soglia);
        } catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }
}