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
} from 'react-native';
import OpenCV from '../NativeModules/OpenCV';
import { CardList } from 'react-native-card-list';
import { Right } from 'native-base';

export default class Analisys extends Component {
  constructor() {
    super();
    this.state = {
      Disable_Button: false,
      isOpen: false,
      isDisabled: false,
      cardPhoto: null,
      source: null,
      analisysDate: '',
      add: false,
      statusAnalisys: false,
      id: 0,
      title: "Analise ID: ",
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
      this.setState({ cardPhoto: source, add: true, analisysDate: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() });
      this.setState(this.state.cards[this.state.id] = {
        id: this.state.id.toString(),
        title: 'Analise id: ' + this.state.id,
        picture: this.state.cardPhoto,
        content: <View>
          <Text h4>Doenças detectadas: </Text>
          <View style={styles.analisys}>
            <Icon name='bug-report'></Icon>
            <Text> 84.5% _nome_doença_1</Text>
            <Right><Text style={{ color: 'blue' }} onPress={() => {
              this.props.navigation.navigate('Results');
            }
            }>Ver Mais</Text></Right>
          </View>
          <View style={styles.analisys}>
            <Icon name='bug-report'></Icon>
            <Text> 32.1% _nome_doença_2</Text>
            <Right><Text style={{ color: 'blue' }}
              onPress={() => {
                this.props.navigation.navigate('Results');
              }
              }>Ver Mais</Text></Right>
          </View>
          <View style={styles.analisys}>
            <Icon name='bug-report'></Icon>
            <Text> 9.2% _nome_doença_3</Text>
            <Right>
              <Text style={{ color: 'blue' }}
                onPress={() => {
                  this.props.navigation.navigate('Results');
                }
                }>Ver Mais</Text>
            </Right>
          </View>
          <Text h4>Informações adicionais:</Text>
          <Text>Saiba que a sua análise além de lhe ajudar a identificar a doença que
          está afetando o seu cultivo, está contribuindo junto com o crescimento
                    de nosso banco de imagens! </Text>
          <Text>Portanto, desfrute o máximo que o
                    Aplicativo GreenEyes pode te oferecer!</Text>
        </View>
      });
      this.setState({ id: parseInt(this.state.id) + 1 });
    });
  }

  sendImage() {
    console.log("log do sendImage:" + this.props.screenProps.token.token)
    fetch('http://10.0.2.2:5000/api/gyresources/images/', {
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
          Alert.alert(title = 'Imagem enviada!: ' + response.message)
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
    fetch('http://10.0.2.2:5000/api/gyresources/analysis/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.screenProps.token.token
      },
      body: JSON.stringify({
        id: 0,
        idImage: this.state.idImagem,
        idClassifier: 1
      }),
    }).then((response) => response.json())
      .then(response => {
        this.analisysComplete(response.id)
        console.log('Token: ' + this.props.screenProps.token.token + ', IdImage: ' + this.state.idImagem + ', Message from API: ' + response.message)
      }).catch((error) => response.json())
      .catch(error => {
        Alert.alert(title = 'Error: ')
        console.error('Error: ' + error);
      });
  }

  async analisysComplete() {
    console.log("Log do analisysComplete")
    fetch('http://10.0.2.2:5000/api/gyresources/analysisResult', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'dataType': 'json'
      },
      body: JSON.stringify({
        action: 'search',
        idAnalysis: this.response.id,
        idDisease: 1,
        score: 0,
        frame: '100,100,128,128',
        pageSize: 10,
        offset: 0
      })
    }).then(response => response.json())
      .then(response => {
        if (response.status_code == 200 || response.status_code == 201) {
          if (response.response == "") {
            this.analisysComplete();
          }
          else {

          }
        }
      })
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
});