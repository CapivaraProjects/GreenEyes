import React, { Component } from 'react';
import { Icon, Button } from 'react-native-elements'
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  Alert
} from 'react-native';


export default class Howto extends Component {
  constructor(props){
    super(props);
    this.state={
      token_R: ""
    } 
  }

  static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Icon name='help' style={{ color: tintColor }} />
		),
		header: null,
  };

  render() { 
    return (
      <View style={styles.container}>
        <Text>
          Por favor, leia a seguir os nossos termos de uso do aplicativo:
          </Text>
          <Text>Token: {this.state.token_R}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  title: {
    alignSelf: 'center',
    marginTop: 15
  },

  description: {
    alignSelf: 'center'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal3: {
    height: 300,
    width: 300
  },
  itemStyle: {
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',

  },
  picker: { 
    width: 200
  },
});