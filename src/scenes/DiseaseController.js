import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {Icon} from 'react-native-elements'
import SearchBody from './SearchBody'
import Disease from './Disease'
import Analisys from './Analisys'
import { config } from '../../config'

var diseaseInfo = 0;
export default class PlantsController extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({tintColor}) => (
    <Icon name='search' style={{color: tintColor}} />
    )
  };

  render() {
    console.log(this.props.navigation.state.params.diseaseInfo);
    return (
      <AppStackNavigator screenProps={{diseaseInfo: this.props.navigation.state.params.diseaseInfo}}/>
    );
  }
}

const AppStackNavigator = createAppContainer(createStackNavigator({
     Disease: { screen: Disease, navigationOptions: { header: null} },
     Search: { screen: SearchBody, navigationOptions: { header: null} },
     Analysis: { screen: Analisys, navigationOptions: { header: null} }
  },{ initialRouteName: 'Analysis' }));
  /*, {
    headerMode:'none',
    mode: 'modal',
    defautNavigationOptions: {
      gesturesEnabled: false
    },
    /** transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out
      }
    })
  }*/
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
