import React, { Component } from 'react';
import { Image, View, StyleSheet, Alert } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Text } from 'react-native-elements'
import { TextField } from 'react-native-material-textfield'
import store from 'react-native-simple-store';
import { config } from '../../config'
import { db } from '../index'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  navigationOptions = {
    title: 'Login',
  };

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists users (id integer primary key, id_type integer, email varchar(200), username varchar(200), password varchar(2000), salt varchar(32), token varchar(2000), expiration_token datetime, logged integer);',
        [],
        (_, { rows: { _array } }) => console.log('result: ' + JSON.stringify(_array)),
        (_, error) => console.log('error: ' + error.message),
      )
      tx.executeSql(
        'create table if not exists images (id integer primary key, url varchar(2000), source VARCHAR(2000));',
        [],
        (_, { rows: { _array } }) => console.log('result: ' + JSON.stringify(_array)),
        (_, error) => console.log('error: ' + error.message),
      )
      tx.executeSql(
        'create table if not exists analysis (id integer primary key, id_image integer, id_classifier integer, id_user integer, result_class VARCHAR(200), result_prob DECIMAL(5, 2));',
        [],
        (_, { rows: { _array } }) => console.log('result: ' + JSON.stringify(_array)),
        (_, error) => console.log('error: ' + error.message),
      )
      tx.executeSql(
        'create table if not exists texts (id integer primary key, language varchar(20), tag varchar(2000), value varchar(100000), description varchar(2000));',
        [],
        (_, { rows: { _array } }) => console.log('result: ' + JSON.stringify(_array)),
        (_, error) => console.log('error: ' + error.message),
      )
      tx.executeSql(
        'select * from users where logged = ?;',
        [1],
        (_, { rows: { _array } }) => this.setUser({users: _array}),
        (_, error) => console.log('error: ' + JSON.stringify(error)),
      )
        // (_, { rows: { _array } }) => console.log('user: ' + JSON.stringify(_array)),
      console.log('created table users!')
    })
  }

  setUser({users}) {
    if (users.length > 0) {
      this.setState({user: users[0]})
      console.log('user: ' + JSON.stringify(this.state.user))
      if (this.state.user != null) {
        this.props.navigation.navigate('Main', {
          token: this.state.user.token,
          user: this.state.user
        });
      }
    }
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
            blurOnSubmit={false}
            onSubmitEditing={() => { this.password.focus() }}
            onChangeText={(value) => this.setState({ username: value })} />
          <TextField
            label='Senha'
            ref={(input) => { this.password = input }}
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
  teste(){
    Alert.alert(
      title = 'Ops!', config.API_URL)
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
      fetch( config.API_URL+'/token/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + creds
        },
      }).then(response => response.json())
        .then(response => {
          if (response.status_code == 200) {
            fetch( config.API_URL+'/users/?action=searchByID&id=' + response.response.id_user, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            }).then(response2 => response2.json())
            .then(response2 => {
              db.transaction(tx => {
                tx.executeSql(
                  "SELECT * FROM users WHERE id = ?",
                  [response2.response.id],
                  (_, { rows: { _array } }) => this.setUser({users: _array}),
                  (_, error) => console.log('error: ' + error.message),
                )
                if (this.state.user == null) {
                  tx.executeSql(
                    "INSERT INTO users (id, id_type, email, username, password, salt, token, expiration_token, logged) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
                    [
                        response2.response.id,
                        response2.response.id_type,
                        response2.response.email,
                        response2.response.username,
                        response2.response.password,
                        response2.response.salt,
                        response.response.token,
                        response.response.duration,
                        1,
                    ],
                    (_, { rows: { _array } }) => this.setUser({users: _array}),
                    (_, error) => console.log('error: ' + error.message),
                  )
                  console.log('user: ' + JSON.stringify(this.state.user))
                }
              })
            })
          
            //store.push("userinfo", JSON.parse(response.response));
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
