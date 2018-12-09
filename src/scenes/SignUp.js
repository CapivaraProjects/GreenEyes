import React, { Component } from 'react';
import { AppRegistry, 
  Image,
  View, 
  StyleSheet, 
  Alert} from 'react-native';
import {FormInput, FormLabel, Button, Text} from 'react-native-elements'
import { config } from '../../config'

export default class SignUp extends Component {
  static navigationOptions =
  {
     title: 'SignUp',
  };

  state = {
    username: null,
    password: null,
    repassword: null,
    email: null,
    salt: ''
  }

  render() {
    const {navigate} = () => this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text h2>Cadastro</Text>
        </View>

        <View style={styles.formContainer}>
        <FormLabel>E-mail</FormLabel>
        <FormInput activeOpacity={0.7} onChangeText={(value) => this.setState({ email: value })} />
        <FormLabel>Usuário</FormLabel>
        <FormInput activeOpacity={0.7} onChangeText={(value) => this.setState({ username: value })} />
        <FormLabel>Senha</FormLabel>
        <FormInput secureTextEntry={true} activeOpacity={0.7} onChangeText={(value) => this.setState({ password: value })} />
        <FormLabel>Re-digite a senha</FormLabel>
        <FormInput secuteTextEntry={true} activeOpacity={0.7} onChangeText={(value) => this.setState({ repassword: value })} />
        
        <Button
            backgroundColor='#83f02f'
            borderRadius={4}
            title='Enviar'
            rounded
            onPress={() => {this.createUser()}}>
        </Button>
        <View padding={5}></View>
        <Button
            backgroundColor='#83f02f'
            borderRadius={4}
            title='Já possui uma conta? Entre!'
            rounded
            onPress={() => {this.props.navigation.navigate('Login')}}>
        </Button>
        </View>
      </View>
    );
  }

  createUser(){
    if(this.state.username != null & this.state.email != null){
       if(this.state.password == this.state.repassword){
        fetch(config.API_URL+'/users/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password, 
          salt: 'salt',
          dateInsertion: 'Realizada em: '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),
          dateUpdate: 'Realizada em: '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),
          idType: 1
        }),
      }).then((responseJson) => {
        var response = responseJson.json();
        if(response.status_code == 200){
          Keyboard.dismiss();
          var userInfo = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password, 
            salt: 'salt',
            dateInsertion: 'Realizada em: '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),
            dateUpdate: 'Realizada em: '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),
            idType: 1
          }
        }
        Alert.alert("Sucesso!", "Cadastrado com sucesso!");
        this.props.navigation.navigate('Login');
      }).catch((error) => {
            console.error(error);
            Alert.alert(
              title='Opa',
              "Algo de errado aconteceu, tente novamente em instantes.")
      });
    } else{
      Alert.alert(
        title='Opa!',
        'Senhas divergentes!') 
      }
    } else{
      Alert.alert(title="Ops!", 'Usuário ou e-mail não preenchidos!')
    }
  }
}


const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FFF',
      flex: 1   
    },
  
    logoContainer:{
      alignItems:'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    
    input:{
      height: 50,
      marginBottom: 20,
      color: '#6b6f67',
      paddingHorizontal: 10,
    },
  
    formContainer:{
      padding: 28
    },

}
);
