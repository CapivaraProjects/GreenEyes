import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Alert
} from 'react-native';
import { FormInput, FormLabel, Button, Text } from 'react-native-elements'
import { TextField } from 'react-native-material-textfield'
import store from 'react-native-simple-store';

export default class PwRecovery extends Component {
  static navigationOptions =
    {
      title: 'PwRecovery',
    };

  state = {
    email: '',
    storedEmail: '',
  }

  render() {
    const { navigate } = () => this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text h2>Recuperar senha</Text>
        </View>
        <View style={styles.formContainer}>
          <TextField
            label='Insira o seu e-mail'
            returnKeyType='next'
            onChangeText={(value) => this.setState({ email: value })} />
          <Button
            backgroundColor='#83f02f'
            borderRadius={4}
            title='Enviar'
            rounded
            onPress={() => {this.sendEmail()}}>
          </Button>
        </View>
      </View>
    );
  }

  sendEmail() {
    store.get(userinfo).then((res) => this.setState({storedEmail: res.email}));
    if(this.state.email == this.state.storedEmail)
    {
      console.log("Email confirmed");
    var i = parseInt(Math.random() * ((9999 - 1000) + 1));
    this.setState({ generatedCode: i });
    console.log("Code generated, sending emai.");
    fetch('http://192.168.43.163:5000/api/gyresources/messages/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: this.state.email,
        coreVerification: this.state.generatedCode,
      }),
    }).then(response => response.json())
      .then(response => {
        Alert.alert(title = 'Sucesso!', 'Enviamos uma nova senha a você!');
        console.log("E-mail sended.");
        console.log(response);
      }).catch((error) => {
        console.error(error);
      });
    }
    else{
      Alert.alert("Nenhum usuário com esse e-mail, logou no aplicativo")
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

  logo: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderWidth: 1,
    borderRadius: 150
  },

  input: {
    height: 50,
    marginBottom: 20,
    color: '#6b6f67',
    paddingHorizontal: 10,
  },

  formContainer: {
    padding: 28
  },

  buttonContainer: {
    backgroundColor: '#83f02f',
    paddingVertical: 15,
    marginBottom: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
}
);
