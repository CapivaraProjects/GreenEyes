import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import { AppRegistry, 
  TextInput,
  Image,
  Text,
  View, 
  StyleSheet, 
  Alert,
  TouchableOpacity,
  AsyncStorage} from 'react-native';

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
              onPress={() =>{this.createUser()}
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
        fetch('http://10.0.2.2:5000/api/gyresources/users/', {
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
          Alert.alert(
          title='Legal!',
          'Aleluia irmaos.'+response.message)
          this.props.navigation.navigate('Login');
          var userInfo = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password, 
            salt: 'salt',
            dateInsertion: 'Realizada em: '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),
            dateUpdate: 'Realizada em: '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),
            idType: 1
          }
          AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
        Alert.alert(
          title='Opa!',
          'Não foi não '+response.status_code)
      }).catch((error) => {
            console.error(error);
            Alert.alert(
              title='Legal!',
              error)
      });
    } else{
      Alert.alert(
        title='Opa!',
        'Senhas divergentes!') 
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