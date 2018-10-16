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
  ProgressBarAndroid
} from 'react-native';
//import OpenCV from '../NativeModules/OpenCV';
import { CardList } from 'react-native-card-list';
import { Right } from 'native-base';

export default class Analisys extends Component {
  constructor() {
    super();
    this.state = {
      Disable_Button: false,
      analisys1: 'Processando imagem!',
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
      aux: [],
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
                <ProgressBarAndroid
                  styleAttr="Small"
                  progress={this.state.progress} />
                <Text style={{ color: 'blue' }} onPress={() => {
                  this.setState({
                      analisys1: "Tetranychus",
                      analisys2: "Alternaria",
                      analisys3: "Healthy",
                      percent1: "84.3%",
                      percent2: "32.1%",
                      percent3: "8.0%"
                    })
                  //this.props.navigation.navigate('Results', { disease: [] });
                }}> {this.state.percent1}</Text>
              </View>
            </Right>
          </View>
          <View style={styles.analisys}>
            <Icon name='bug-report'></Icon>
            <Text> {this.state.analisys2}</Text>
            <Right>
              <View flexDirection='row'>
                <ProgressBarAndroid
                  styleAttr="Small"
                  progress={this.state.progress} />
                <Text style={{ color: 'blue' }}
                  onPress={() => {
                    this.setState({
                      analisys1: "Tetranychus",
                      analisys2: "Alternaria",
                      analisys3: "Healthy",
                      percent1: "84.3%",
                      percent2: "32.1%",
                      percent3: "8.0%"
                    })
                    //this.props.navigation.navigate('Results', { disease: [] });
                  }
                  }> {this.state.percent2}</Text>
              </View>
            </Right>
          </View>
          <View style={styles.analisys}>
            <Icon name='bug-report'></Icon>
            <Text> {this.state.analisys3}</Text>
            <Right>
              <View flexDirection='row'>
                <ProgressBarAndroid
                  styleAttr="Small"
                  progress={this.state.progress} />
                <Text style={{ color: 'blue' }}
                  onPress={() => {
                    this.setState({
                      analisys1: "Tetranychus",
                      analisys2: "Alternaria",
                      analisys3: "Healthy",
                      percent1: "84.3%",
                      percent2: "32.1%",
                      percent3: "8.0%"
                    });
                    //this.props.navigation.navigate('Results', { disease: [] });
                  }
                  }> {this.state.percent3}</Text>
              </View>
            </Right>
          </View>
        {
          //<Button title="Imagem" onPress={() => this.sendImage()}></Button>
          //<Button title="Analise" onPress={() => this.addAnalysis()}></Button>
          //<Button title="Cade resposta?" onPress={() => this.sendImage()}></Button>
        }
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
      }).catch((error) => response.json())
      .catch(error => {
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
        console.log('Token: ' + this.props.screenProps.token.token + ', IdImage: ' + this.state.idImagem + ', Message from API: ' + response.message)
        this.setState({ idResult: response.response.id });
        Alert.alert(title='Realizando análise!')
        this.analisysComplete();
      }).catch((error) => response.json())
      .catch(error => {
        Alert.alert(title = 'Error: ')
        console.error('Error: ' + error);
      });
  }

  async analisysComplete() {
    console.log("Log do analisysComplete")
    fetch('http://192.168.43.163:5000/api/gyresources/analysis', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'dataType': 'json'
      },
      body: JSON.stringify({
        action: 'searchByID',
        idAnalysis: this.state.idResult
      })
    }).then(response => response.json())
      .then(response => {
        if (response.status_code == 200 || response.status_code == 201) {
          if (response.response.analisys_results == "") {
            this.analisysComplete();
          }
          else {
            this.setState({
              aux: response.analisys_results
            });
            const sort = Object.keys(this.state.aux.score).sort(function (a, b) { return this.state.aux.score[b] - this.state.aux.score[a] })
            this.setState({
              analisys1: "Tetranychus",
              analisys2: "Alternaria",
              analisys3: "Healthy",
              //analisys1:sort[0].disease.scientificName.toString(),
              //analisys2:sort[1].disease.scientificName.toString(),
              //analisys3:sort[2].disease.scientificName.toString(),
              percent1: sort[0].toString(),
              percent2: sort[1].toString(),
              percent3: sort[2].toString(),
            });
          }
        }
      })
  }

 
  setPercent = () => {
    setTimeout(function(){
      this.setState({
        analisys1: "Tetranychus",
        analisys2: "Alternaria",
        analisys3: "Healthy",
        percent1: "84.3%",
        percent2: "32.1%",
        percent3: "8.0%"
      })
    }.bind(this),2000);
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