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
    generatedCode: 0
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
            onPress={() => { this.sendEmail() }}>
          </Button>
        </View>
      </View>
    );
  }

  sendEmail() {
    fetch('http://192.168.43.163:5000/api/gyresources/users/?action=search&id=0&email=' + this.state.email + '&username=%20&password=%20&salt=%20&dateInsertion=%20&dateUpdate=%20&pageSize=1&offset=1', {
      headers: {
        'Accept': 'application/json',
      }
    }).then((response) => response.json())
      .then(response => {
        if(response.status_code == 200) {
          console.log("Email confirmed, sending email");
          var i = parseInt(Math.random() * ((9999 - 1000) + 1));
          this.setState({ generatedCode: i });
          console.log("Code generated, reseting password.");
          fetch('http://192.168.43.163:5000/api/gyresources/users/', {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: 0,
              idType: 1,
              email: this.state.email,
              username: 'gvnn',
              password: this.state.generatedCode,
              salt: 'salt',
              dateInsertion: '04/10/2018',
              dateUpdate: '01/12/2018'
            }),
          }).then(response => response.json())
            .then(response => {
              if(response.status_code == 200) {
              console.log("Password reseted, sending e-mail");
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
                  console.log("E-mail sended." + response);
                }).catch((error) => {
                  console.error(error);
                  Alert.alert(title = "Ops", "Serviço indisponível, tente novamente em instantes!");
                });
              }
            }).catch((error) => {
              console.error("Error: "+error);
              Alert.alert(title = "Ops", "Serviço indisponível, tente novamente em instantes!");
            });         
        }
      }).catch((error) => {
        Alert.alert("E-mail não cadastrado");
      });
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
