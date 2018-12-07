import React, { Component } from 'react';
import { Image, View, StyleSheet, Alert } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements'
import { TextField } from 'react-native-material-textfield'
import store from 'react-native-simple-store';

export default class Login extends Component {
  state = {
    username: 'test',
    password: 'test',
  };

  navigationOptions = {
    title: 'Login',
  };

  onSubmit() {
    let errors = {};

    ['username', 'password']
      .forEach((name) => {
        let value = this[name].value();

        if (!value) {
          errors[name] = 'Não pode ser vazio';
        } else {
          if ('password' === name && value.length < 6) {
            errors[name] = 'Muito curto';
          }
        }
      });

    //this.auth();
  }

  render() {
    const { navigate } = () => this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
            source={require('../logo.jpeg')} />
        </View>

        <View style={styles.formContainer}>
          <TextField
            label='Usuário'
            returnKeyType='next'
            blurOnSubmit={true}
            onChangeText={(value) => this.setState({ username: value })} />
          <TextField
            label='Senha'
            secureTextEntry={true}
            blurOnSubmit={true}
            onChangeText={(value) => this.setState({ password: value })} />
          <View></View>
          <Button
            backgroundColor='#83f02f'
            borderRadius={4}
            title='Login'
            rounded
            onPress={() => {
              //this.onSubmit();
              //this.props.navigation.navigate('Main')
              this.auth();
              }}>
          </Button>
          <View padding={5}></View>
          <Button
            backgroundColor='#03A9F4'
            title='Cadastre-se'
            rounded
            onPress={() => {this.props.navigation.navigate('SignUp')}}>
          </Button>
          <View
            alignItems="center"
            padding={15}>
            <Text onPress={() => {this.props.navigation.navigate('PwRecovery')}}>Esqueceu sua senha?</Text>
          </View>
        </View>
      </View>
    );
  }

  auth() {
    if (this.state.username == null || this.state.password == null) {
      Alert.alert(
        title = 'Ops!',
        'Preencha os campos corretamente!')
      console.log("Fields incorrectly filled")
    }
    else {
      window.btoa = window.btoa || require('Base64').btoa;
      creds = btoa(this.state.username + ":" + this.state.password);
      fetch('http://192.168.43.163:5000/api/gyresources/token/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + creds
        },
      }).then(response => response.json())
        .then(response => {
          if (response.status_code == 200) {
            this.props.navigation.navigate('Main', {
              token: response.response.token
            });
            store.push("userinfo", JSON.parse(response.response));
            console.log("Logged successfully !"+ response.response.token);
          } else{
            Alert.alert("Usuário ou senha inválido");
          }
        })
        .catch((error) => {
          console.error(error);
        });
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
    paddingHorizontal: 10,
  },

  formContainer: {
    padding: 28,
    margin: 8,
  },

  buttonContainer: {
    backgroundColor: '#83f02f',
    paddingVertical: 15,
    marginBottom: 10
  },

  buttonSignUp: {
    backgroundColor: '#03A9F4',
    width: 175,
    paddingVertical: 15,
  },

  buttonPassRecovery: {
    backgroundColor: '#03A9F4',
    width: 170,
    paddingVertical: 15,
    marginLeft: 10
  },

  buttonGroup: {
    flexDirection: 'row',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
}
);
