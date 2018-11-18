import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation'
import {Icon} from 'react-native-elements'
import Plants from './Plants'
import SearchBody from './SearchBody'
import Disease from './Disease'
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

const AppStackNavigator = StackNavigator({
  Disease:Disease,
  Search:SearchBody
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
