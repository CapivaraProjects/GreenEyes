import React, { Component } from 'react';
import {Icon} from 'native-base'
import { AppRegistry, 
  Text,
  Image,
  View, 
  StyleSheet, 
  } from 'react-native';


export default class About extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
    <Icon name='ios-information-circle-outline' style={{color: tintColor}} />
    )
  };
  render() {
    return (
      <View
      style={styles.body}>
        
        <Image
          style={styles.image}
          source={require('GreenEyes/src/logo.jpeg')}
          resizeMode="cover"
        />
        <Text style={styles.title}>GreenEyes</Text>
        <Text style={styles.description}>Descrição</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    width: 250,
    height: 250,
    borderWidth: 1,
    borderRadius: 75,
    alignSelf: 'center'
  },

  body:{
    height: 70,
    width: 300,
    marginTop: 40,
    alignSelf: 'center'
  },

  title:{
    alignSelf: 'center',
    marginTop: 15 
  }, 

  description:{
    alignSelf: 'center'
  }
});