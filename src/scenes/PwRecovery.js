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

export default class PwRecovery extends Component {
  static navigationOptions =
  {
     title: 'PwRecovery',
  };

  state = {
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
        <TouchableOpacity style={styles.buttonContainer}
              color= "#ADFF2F"
              onPress={() =>
                {
                    alert("Feito! Siga as instruções no e-mail que enviamos a você!");
                }
              }>
              <Text style={styles.buttonText}>Enviar</Text>
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
      
    buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
    }
});