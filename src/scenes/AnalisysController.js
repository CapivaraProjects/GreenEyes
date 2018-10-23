import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Icon} from 'react-native-elements'
import Results from './Results';
import Analisys from './Analisys'

export default class AnalisysController extends Component {
  state = {
    token: ''
  }
  static navigationOptions = {
    header: null,
    tabBarIcon: ({tintColor}) => (
    <Icon name='spa' style={{color: tintColor}} />
    )
  };

  render() {
    return (
      <AppStackNavigator screenProps={{token: this.props.screenProps.token}}/>
    );
  }
}

const AppStackNavigator = StackNavigator({
  Analise:Analisys,
  Resultado:Results,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
