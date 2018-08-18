import {TabNavigator} from 'react-navigation'
import React, { Component } from 'react';
import Plants from './scenes/Plants';
import Howto from './scenes/Howto';
import User from './scenes/User';
import About from './scenes/About';
import AnalisysController from './scenes/AnalisysController';
import {
  StyleSheet,
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
    navigationOptions:{
      tabBarLabel: 'Ajuda'
    }
  },
  Plants:{
    screen: Plants,
    navigationOptions:{
      tabBarLabel: 'Pesquisar'
    }
  },
  AnalisysController:{
    screen: AnalisysController,
    navigationOptions:{
      tabBarLabel: 'Análises'
    }
  },
  User:{
    screen: User,
    navigationOptions:{
      tabBarLabel: 'Usuário'
    }
  },
  About:{
    screen: About,
    navigationOptions:{
      tabBarLabel: 'Sobre'
    }
  },
  },
{
  animationEnabled: true,
  swipeEnabled: false,
  tabBarPosition: "bottom",
  backgroundColor: "#8BC34A",
  tabBarOptions: {
    activeTintColor: "#212121",
    inactiveTintColor: "#DCEDC8",
    labelStyle:{
      fontSize:10
    },
    style: {
      backgroundColor: "#8BC34A",
      height: 56
    },
    navigationOptions: {header: null,
      androidStatusBarColor:'#689F38'},
    showLabel: true,
    showIcon: true
  },
  
},
);


