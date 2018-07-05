import {TabNavigator} from 'react-navigation'
import React, { Component } from 'react';
import Plants from './scenes/Plants';
import Howto from './scenes/Howto';
import User from './scenes/User';
import About from './scenes/About';
import Analisys from './scenes/Analisys';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Main extends Component {
    static navigationOptions =
    {
        title: 'Main',
    };
    render() {
      return (
        <AppTabNavigator/>
      );
  }
}

const AppTabNavigator = TabNavigator({
  Howto:{
    screen: Howto,
  },
  Plants:{
    screen: Plants,
  },
  Analisys:{
    screen: Analisys,
  },
  User:{
    screen: User,
  },
  About:{
    screen: About,
  },
  },
{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  backgroundColor: "#8BC34A",
  tabBarOptions: {
    activeTintColor: "#212121",
    inactiveTintColor: "#DCEDC8",
    style: {
      backgroundColor: "#8BC34A"
    },
    navigationOptions: {header: null,
      androidStatusBarColor:'#689F38'},
    showLabel: false,
    showIcon: true
  },
  
},
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


