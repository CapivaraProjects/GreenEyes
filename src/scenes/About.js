import React, { Component } from 'react';
import {Icon} from 'native-base'
import {Avatar} from 'react-native-elements'
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
      <View style={styles.container}>
        <Avatar
          size="xlarge"
          rounded
          source={require('../logo.jpeg')}
          activeOpacity={0.7}
        />
        <Text style={styles.title}>GreenEyes</Text>
        <Text style={styles.description}>Descrição</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    alignSelf: 'center',
    marginTop: 15 
  }, 

  description:{
    alignSelf: 'center'
  }
});