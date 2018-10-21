import React, { Component } from 'react';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modalbox'
import ImagePicker from 'react-native-image-picker'
import { Text, Icon } from 'react-native-elements'
import {
  Platform,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Picker,
  Alert,
  Button,
  PixelRatio,
  ProgressBarAndroid,
  TouchableOpacity
} from 'react-native';
//import OpenCV from '../NativeModules/OpenCV';
import { CardList } from 'react-native-card-list';
import { Right } from 'native-base';

export default class Analisys extends Component {
  constructor() {
    super();
    this.state = {
      Disable_Button: false,
      i: null,
      analisys1: 'Processando imagem!',
      idDisease1: 0,
      idDisease2: 0,
      idDisease3: 0,
      analisys2: 'Processando imagem!',
      analisys3: 'Processando imagem!',
      percent1: 'Ver Mais',
      percent2: 'Ver Mais',
      percent3: 'Ver Mais',
      isOpen: false,
      isDisabled: false,
      cardPhoto: null,
      source64: '',
      source: null,
      analisysDate: '',
      idResult: 0,
      add: false,
      statusAnalisys: false,
      results: [],
      id: 0,
      progress: 0,
      indeterminate: false,
      title: "Analise ID: ",
      timer: null,
      loading: true,
      aux: 0,
      cards: [],
      cardes: [{
        id: "0",
        title: "Analise ID: 1",
        picture: require('../ft.jpg'),
        content: <Text>TOMATE</Text>
      },
      {
        id: "1",
        title: "Tomatew",
        picture: require('../tomate.jpg'),
        content: <Text>TESTE FODAA</Text>
      }],
    }
  }

  static navigationOptions = {
    header: null,
  };

  AddNewCard = () => {
    this.setState({ status: '' });
    this.refs.modal3.close();
    var options = {
      title: 'Selecione uma opção:',
      takePhotoButtonTitle: 'Tirar Foto',
      chooseFromLibraryButtonTitle: 'Escolher da galeria',
      cancelButtonTitle: 'Cancelar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (this.state.loading) {
        var progress = <ProgressBarAndroid styleAttr="Small" progress={this.state.progress} />
      }
      console.log('Response = ', response);
      let source = { uri: response.uri };
      this.setState({ cardPhoto: source, add: true, source64: response.data, analisysDate: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() });
      this.setState(this.state.cards[this.state.id] = {
        id: this.state.id.toString(),
        title: 'Analise id: ' + this.state.id,
        picture: this.state.cardPhoto,
        content: <View>
          <Text h4>Doenças detectadas: </Text>
          <View style={styles.analisys}>
            <Icon backgroundColor='transparent' name='bug-report'></Icon>
            <Text> {this.state.analisys1}</Text>
            <Right>
              <View flexDirection='row'>
                {this.progress}
                <TouchableOpacity
                  onPress={() => {this.getDisease(this.state.idDisease1)}}>
                  <Text style={{ color: 'blue' }}>{this.state.percent1}</Text>
                </TouchableOpacity>
              </View>
            </Right>
          </View>
          <View style={styles.analisys}>
            <Icon name='bug-report'></Icon>
            <Text> {this.state.analisys2}</Text>
            <Right>
              <View flexDirection='row'>
                {this.progress}
                <TouchableOpacity
                  onPress={() => {this.getDisease(this.state.idDisease2)}}>
                  <Text style={{ color: 'blue' }}>{this.state.percent2}</Text>
                </TouchableOpacity>
              </View>
            </Right>
          </View>
          <View style={styles.analisys}>
            <Icon name='bug-report'></Icon>
            <Text> {this.state.analisys3}</Text>
            <Right>
              <View flexDirection='row'>
                {this.progress}
                <TouchableOpacity
                  onPress={() => {this.getDisease(this.state.idDisease3)}}> 
                  <Text style={{ color: 'blue' }}>{this.state.percent3}</Text>
                </TouchableOpacity>
              </View>
            </Right>
          </View>
          <Text h4>Você sabia?</Text>
          <Text>A sua análise além de lhe ajudar a identificar a doença que
          está afetando o seu cultivo, está contribuindo junto com o crescimento
                    de nosso banco de imagens?! </Text>
          <Text>Portanto, desfrute o máximo que o
                    Aplicativo GreenEyes pode te oferecer!</Text>
        </View>
      });
      this.setState({ id: parseInt(this.state.id) + 1 });
      this.sendImage();
    });
  }

  sendImage() {
    console.log("log do sendImage:" + this.props.screenProps.token.token)
    fetch('http://192.168.43.163:5000/api/gyresources/images/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.screenProps.token.token
      },
      body: JSON.stringify({
        id: 1,
        idDisease: 50,
        url: this.state.source64,
        description: '',
        source: 'cameraRoll',
        size: 1
      }),
    }).then((response) => response.json())
      .then(response => {
        if (response.status_code == 200 || response.status_code == 201) {
          Alert.alert(title = 'Imagem enviada!')
          this.setState({ idImagem: response.response.id });
          console.log(response.status_code + ',' + response.message)
          this.addAnalysis();
        }
      }).catch(error => {
        Alert.alert(title = 'Erro!: ' + response.message)
        console.error(error);
      });
  }

  addAnalysis() {
    console.log("Cheguei no addAnalisys")
    fetch('http://192.168.43.163:5000/api/gyresources/analysis/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.screenProps.token.token
      },
      body: JSON.stringify({
        id: 0,
        idImage: this.state.idImagem,
        idClassifier: 1,
        idUser: 4
      }),
    }).then((response) => response.json())
      .then(response => {
          this.analisysComplete();
          console.log('Token: ' + this.props.screenProps.token.token + ', IdImage: ' + this.state.idImagem + ', Message from API: ' + response.message);
          Alert.alert(title = 'Realizando análise!');
      }).catch(error => {
        Alert.alert(title = 'Error: ')
      });
  }

  analisysComplete() {
    var res = '';
    var i = setInterval(function () {     
    console.log("Log do analisysComplete")
      fetch('http://192.168.43.163:5000/api/gyresources/analysis/?action=searchByID&id=256599', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }).then(response => response.json())
      .then(response => {
        res = response
        clearInterval(i);
        Alert.alert("Analise finalizada!", "Organizando informações")
        var counter = {}
        if (response.response.analysis_results.length > 0) {
          console.log("Analisys results its filled, sorting..."+ JSON.parse(res));
          for (var i = 0; i < response.response.analysis_results.length; i++) {
            if (!response.response.analysis_results[i].disease.id in counter.keys()) {
              counter[response.response.analysis_results[i].disease.id] = 1
            } else {
              counter[response.response.analysis_results[i].disease.id] += 1
            }
          }

          var greater = [response.response.analysis_results[0].disease.id, response.response.analysis_results[0].disease.id, response.response.analysis_results[0].disease.id];
          for (var i = 0; i < greater.length; i++) {
            var index = 0
            var aux = 0
            for (var key in counter) {
              if (counter[key] > aux)
                index = key
                aux = counter[key]
            }
            greater[i] = index
            delete counter[index]
          }

          var diseases = []
          for (var j = 0; j < greater.length; j++) {
            for (var i = 0; i < response.response.analysis_results.length; i++) {
              if (response.response.analysis_results[i].disease.id == greater[j]) {
                diseases.push(response.response.analysis_results[i].disease)
                break
              }
            }
          }

          for (var i = 0; i< diseases.length; i++) {
            hell = {}
            hell.push("analisys"+i, diseases[i].scientificName)
            hell.push("idDisease"+i, diseases[i].idDisease)
            hell.push("percent"+i, counter[diseases[i].idDisease] / response.response.analysis_results.length + "%")
            this.setState(hell)
          }
        }
      });
    }.bind(this), 19000);
    Alert.alert("Analise ainda não está completa")
    //clearInterval(this.state.i);
    console.log(res);
    this.sortedDiseases(res);
    console.log("Analisys results is empty XXXXX");
  }

  sortedDiseases(result) {
    console.log("Waiting, sorting diseases.")
    var count_disease = { id: 0, count: 0 };
    var list = [{ id: 0, idDisease: 0, scientificName: "<i>Alternaria solani</i>", count: 0 }, { id: 1, idDisease: 0, scientificName: "<i>Septoria lycopersici</i>", count: 0 }, { id: 2, idDisease: 0, scientificName: "<i>Tetranychus urticae</i>", count: 0 }, { id: 3, idDisease: 0, scientificName: "<i>Xanthomonas campestris</i>", count: 0 }, { id: 4, idDisease: -1, scientificName: "<i>Outros</i>", count: 0 }];
    /* 
     * 0 Alternaria solani
     * 1 Septoria lycopersici
     * 2 Tetranychus urticae
     * 3 Xanthomonas campestris
     * 4 Outros
     */
    var total = 0;
    var j = result.response.analysis_results.length;
    for (var i = 0; i < j; i++) {
      process.stdout.write("\n" + i + ": " + result.response.analysis_results[i].disease.scientificName);
      if (result.response.analysis_results[i].disease.scientificName == "<i>Alternaria solani</i>") {
        list[0].count += 1;
        if (list[0].count == 1) {
          list[0].idDisease = result.response.analysis_results[i].disease.id;
        }
      } else if (result.response.analysis_results[i].disease.scientificName == "<i>Septoria lycopersici</i>") {
        list[1].count += 1;
        if (list[1].count == 1) {
          list[1].idDisease = result.response.analysis_results[i].disease.id;
        }
      } else if (result.response.analysis_results[i].disease.scientificName == "<i>Tetranychus urticae</i>") {
        list[2].count += 1;
        if (list[2].count == 1) {
          list[2].idDisease = result.response.analysis_results[i].disease.id;
        }
      } else if (result.response.analysis_results[i].disease.scientificName == "<i>Xanthomonas campestris</i>") {
        list[3].count += 1;
        if (list[3].count == 1) {
          list[3].idDisease = result.response.analysis_results[i].disease.id;
        }
      } else {
        list[4].count += 1;
      }
      total += 1;
    }


    var maior1 = { id: list[0].id, scientificName: list[0].scientificName, idDisease: list[0].idDisease, count: list[0].count };
    var maior2 = { id: 0, scientificName: "", idDisease: 0, count: 0 };
    var maior3 = { id: 0, scientificName: "", idDisease: 0, count: 0 };

    var k = list.length - 1;

    for (var i = 1; i < k; i++) {
      if (list[i].count > maior1.count) {
        maior3 = maior2;
        maior2 = maior1;
        maior1 = list[i];
      } else if (list[i].count > maior2.count) {
        maior3 = maior2;
        maior2 = list[i];
      } else if (list[i].count > maior3.count) {
        maior3 = list[i];
      }
    }
    Alert.alert("Finalizado!");
    console.log("Sorted")
    this.setState({
      analisys1: maior1.scientificName,
      analisys2: maior2.scientificName,
      analisys3: maior3.scientificName,
      idDisease1: maior1.idDisease,
      idDisease2: maior2.idDisease,
      idDisease3: maior3.idDisease,
      percent1: maior1.count / total + "%",
      percent2: maior2.count / total + "%",
      percent3: maior3.count / total + "%"
    });
  }

  getDisease(aux){
    fetch('http://192.168.43.163:5000/api/gyresources/diseases/?action=searchByID&id='+aux+'&pageSize=10&offset=10', {
			headers: {
				'Accept': 'application/json',
			}
		}).then((response) => response.json())
    .then(response => {
      if (response.status_code == 200 || response.status_code == 201) {
        this.props.navigation.navigate('Results', {
          results: response.response
        });
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <View
            paddingTop={15}
            padding={25}>
            <Text h3 >Minhas Análises</Text>

          </View>
          <CardList cards={this.state.cards} />
        </ScrollView>
        <ActionButton
          buttonColor="#00BCD4"
          renderIcon={() => <Icon name="add" />}
          onPress={() => this.refs.modal3.open()} />

        <Modal style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal3"} isDisabled={this.state.isDisabled}>
          <View>
            <Text>
              Selecione a planta a ser classificada:
          </Text>
            <Picker
              style={styles.picker}
              mode="dropdown"
              itemStyle={styles.itemStyle}>
              <Picker.Item label='Tomate' value="tomate" />
            </Picker>
            <Button onPress={
              this.AddNewCard
            } title="Confirmar">
              <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
                {
                  this.state.cardPhoto === null ? <Text>Tire uma foto</Text> :
                    <Image style={styles.avatar} source={this.state.cardPhoto} />
                }
              </View>
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingTop: (Platform.OS == 'ios') ? 20 : 0
  },
  analisys: {
    flexDirection: 'row',

  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  },
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal3: {
    height: 300,
    width: 300
  },

  text: {
    color: "black",
    fontSize: 22
  },
  itemStyle: {
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',

  },
  picker: {
    width: 200
  },

  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
}
);
