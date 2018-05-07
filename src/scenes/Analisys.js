import { PropTypes } from 'prop-types';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {BottomNavigation, Toolbar, COLOR, ThemeProvider } from 'react-native-material-ui';
import React, { Component } from 'react';
import ActionButton from 'react-native-action-button';
import { Container, Content, Card, CardItem, Thumbnail, Icon } from 'native-base';
import CardComponent from '../CardComponent';
import Modal from 'react-native-modalbox'
import ImagePicker from 'react-native-image-picker'
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  NativeModules,
  Alert,
  Picker,
  Button,
  PixelRatio
} from 'react-native';

export default class Analisys extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
    };
  }

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
    <Icon name='camera' style={{color: tintColor}} />
    )
  };

  state = {
    avatarSource: null,
  };

  selectPhotoTapped() {
    var options = {
      title: 'Selecione uma opção',
      takePhotoButtonTitle: 'Tirar Foto',
      chooseFromLibraryButtonTitle: 'Escolher da galeria',
      cancelButtonTitle: 'Cancelar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
   
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('Usuário cancelou a escolha de foto');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('Usuário clicou em um botão customizado: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }
 
  showOptions=()=>{
      Alert.alert("Floating Button Clicked", 'teste');
  }
  
  render() {
    return (
       <View style={styles.container}>
        <Content>
          <CardComponent imageSource="1"/>
          <CardComponent imageSource="2"/>
          <CardComponent imageSource="3"/>
        </Content>
        <ActionButton 
          buttonColor="#00BCD4" 
          renderIcon={() => <Icon name="ios-add" />} 
          onPress={() => this.refs.modal3.open()} />

        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
          <View>
          <Text>
            Selecione a planta a ser classificada:
          </Text>
            <Picker
              style={styles.picker}
              mode="dropdown"
              itemStyle={styles.itemStyle}>
              <Picker.Item label="Tomate" value="tomate" />
            </Picker>
            <Button onPress={this.selectPhotoTapped.bind(this)} title="Confirmar">
              <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
              { 
                this.state.avatarSource === null ? <Text>Tire uma foto</Text> :
                <Image style={styles.avatar} source={this.state.avatarSource} />
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
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  },
  container: {
    flex: 1,
    backgroundColor : '#F5F5F5'
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