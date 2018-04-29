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
  TouchableOpacity} from 'react-native';

export default class SignUp extends Component {
  static navigationOptions =
  {
     title: 'SignUp',
  };

  state = {
    username: '',
    password: '',
    email: ''
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
        />

        <TextInput style={styles.input}
          secureTextEntry={true}
          placeholder="Redigite a senha"
          onChangeText={(value) => this.setState({password: value})}
        />

        <TouchableOpacity style={styles.buttonContainer}
              color= "#ADFF2F"
              onPress={() =>
                {
                    //
                }
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