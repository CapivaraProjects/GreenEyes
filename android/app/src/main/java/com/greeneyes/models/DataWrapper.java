package com.greeneyes.models;

import com.google.gson.Gson;

public class DataWrapper {
    public BaseResponse baseResponse;

    public static DataWrapper fromJson(String s) {
        return new Gson().fromJson(s, DataWrapper.class);
    }

    public String toString() {
        return new Gson().toJson(this);
    }
}
