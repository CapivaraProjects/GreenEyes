import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation'
import {Icon, Button, Container, Content} from 'native-base'
import { AppRegistry, 
  TextInput,
  Text,
  Image,
  View, 
  StyleSheet,
  Alert,
  Linking, 
  TouchableOpacity} from 'react-native';

export default class Login extends Component {
  state = {
    username: 'teste',
    usernameBD: null,
    password: 'teste',
    passwordBD: null
  }
  
  static navigationOptions =
  {
     title: 'Login',
  };

  render() {
    const {navigate} = () => this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('GreenEyes/src/logo.jpeg')}/>
        </View>
        
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="none" 
            returnKeyType="next" 
            placeholder='Usuário'
            onChangeText={(value) => this.setState({username: value})}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            onChangeText={(value) => this.setState({password: value})}
          />
          <TouchableOpacity style={styles.buttonContainer}
              color= "#ADFF2F"
              onPress={() =>
                {
                    //this.auth();
                    this.props.navigation.navigate('Main');
                }
              }>
             <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.buttonGroup}>
            <Button style={styles.buttonSignUp}
                color= "#ADFF2F"
                onPress={() =>
                  {
                      this.props.navigation.navigate('SignUp');
                  }
                }>
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </Button>
            <TouchableOpacity style={styles.buttonPassRecovery}
                color= "#ADFF2F"
                onPress={() =>
                  {
                      this.props.navigation.navigate('PwRecovery');
                  }
                }>
                <Text style={styles.buttonText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  

auth(){
    if(this.state.username == null || this.state.password == null){ 
      Alert.alert(
      title='Ops!',
      'Preencha os campos corretamente!')
    }
    else{
      //sjcl.encrypt('pass','salt')  
      fetch('http://127.0.0.1:8888/api/gyresources/users/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.state.usernameBD = responseJson.username
        this.state.passwordBD = responseJson.password
      })
      .catch((error) => {
        console.error(error);
      })
      if(this.username == this.state.usernameBD || this.password == this.state.passwordBD)
      {
        Alert.alert(
          title='Seja vem vindo !'
        )
        this.props.navigation.navigate('Main');
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
    //paddingVertical: 15,
  },

  buttonPassRecovery:{
    backgroundColor: '#03A9F4',
    width:170,
    paddingVertical: 15,
    marginLeft: 10
  },

  buttonGroup:{
    flexDirection: 'row',
  },
  
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});