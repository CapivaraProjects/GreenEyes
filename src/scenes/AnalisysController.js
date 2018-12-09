import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {Icon} from 'react-native-elements'
import Results from './Results';
import Analisys from './Analisys';
import Disease from './Disease';
import { config } from '../../config'


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
    const properties = {token: this.props.screenProps.token, diseaseInfo: 53};
    return (
      <AppStackNavigator screenProps={properties}/>
    );
  }
}

const AppStackNavigator = createAppContainer(createStackNavigator({
  Analise:Analisys,
  Resultado:Results,
  Disease:Disease
}, {
  defautNavigationOptions: {
    gesturesEnabled: false
  },
}));

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
