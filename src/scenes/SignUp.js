import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import { AppRegistry, 
  TextInput,
  Image,
  Text,
  View, 
  StyleSheet, 
  Button,
  Linking,
  Alert,
  TouchableOpacity} from 'react-native';

export default class SignUp extends Component {
  static navigationOptions =
  {
     title: 'SignUp',
  };

  state = {
    username: null,
    password: null,
    repassword: null,
    email: null
  }

  render() {
    const {navigate} = () => this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
          source={require('GreenEyes/src/logo.jpeg')}/>
        </View>

        <View style={styles.formContainer}>
        <TextInput style={styles.input}
          placeholder="E-mail"
          onChangeText={(value) => this.setState({email: value})}
        />

        <TextInput style={styles.input}
          autoCapitalize="none" 
          returnKeyType="next" 
          placeholder='Usuário'
          onChangeText={(value) => this.setState({username: value})}
        />
          
        <TextInput style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          onChangeText={(value) => this.setState({password: value})}
        />

        <TextInput style={styles.input}
          secureTextEntry={true}
          placeholder="Re-digite a senha"
          onChangeText={(value) => this.setState({repassword: value})}
        />

        <TouchableOpacity style={styles.buttonContainer}
              color= "#ADFF2F"
              onPress={() =>{this.createUser();}
          }>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}
            color= "#ADFF2F"
            onPress={() =>
              {
                  this.props.navigation.navigate('Login');
              }
            }>
            <Text style={styles.buttonText}>Já possui uma conta? Entre!</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  createUser(){
    if(this.state.username != null & this.state.email != null){
       if(this.state.password == this.state.repassword){
      fetch('http://127.0.0.1:8888/api/gyresources/users/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
        }),
      }).catch((error) => {
        console.error(error);
      })
      Alert.alert(
        title='Legal!',
        'Seu usuário foi criado!')
      }    
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
  
    logo: {
      position: 'absolute',
      width: 240,
      height: 240,
      borderWidth: 1,
      borderRadius: 150
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
  
    buttonContainer:{
      backgroundColor: '#83f02f',
      paddingVertical: 15,
      marginBottom: 10
    },
  
    buttonSignUp: {
      backgroundColor: '#03A9F4',
      width:175,
      paddingVertical: 15,
    },
  
    buttonPassRecovery:{
      backgroundColor: '#03A9F4',
      position: 'absolute',
      width:175,
      paddingVertical: 15,
    },
    
    buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
    }
});