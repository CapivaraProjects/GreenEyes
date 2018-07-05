import React, { Component } from 'react';
import { TextInput,
  Text,
  Image,
  View, 
  StyleSheet,
  Alert,
  TouchableOpacity} from 'react-native';
//import sjcl from 'sjcl';

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
            <TouchableOpacity style={styles.buttonSignUp}
                color= "#ADFF2F"
                onPress={() =>
                  {
                      this.props.navigation.navigate('SignUp');
                  }
                }>
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
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
  var Base64 = require('js-base64').Base64;
    if(this.state.username == null || this.state.password == null){ 
      Alert.alert(
      title='Ops!',
      'Preencha os campos corretamente!')
    }
    else{
      //aux = sjcl.encrypt(this.state.password,'salt');  
      creds = Base64.encode(this.state.username+":"+aux)
      fetch('http://10.0.2.2:5000/api/gyresources/token', {       
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+creds
      },
      })
        .then((response) => (response.text())
          .then((text) =>{
            Alert.alert(title='alo'+text)
            this.props.navigation.navigate('Main');
          })
            .catch((error) => {
            console.error(error);
          })
      )
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
    paddingVertical: 15,
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