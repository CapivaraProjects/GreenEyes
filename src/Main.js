import {TabNavigator} from 'react-navigation'
import React, { Component } from 'react';
import PlantsController from './scenes/PlantsController';
import Howto from './scenes/Howto';
import User from './scenes/User';
import About from './scenes/About';
import AnalisysController from './scenes/AnalisysController';
import { 
  StyleSheet,
} from 'react-native';
import Analisys from './scenes/Analisys';

export default class Main extends Component {
  constructor(props){
    super(props);
  }
    static navigationOptions = {
        title: 'Main',
    };
    render() {
      return (
        <AppTabNavigator screenProps={{token: this.props.navigation.state.params}}/>
      );
  }
}


const AppTabNavigator = TabNavigator({
  Howto:{
    screen: Howto,
    navigationOptions: {
      tabBarLabel: "Ajuda",
    },
    tabBarOptions: '#FFFFFF'
  },
  PlantsController:{
    screen: PlantsController,
    navigationOptions:{
      tabBarLabel: 'Pesquisar'
    },
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
    inactiveTintColor: "#FFFFFF",
    labelStyle:{
      fontSize:10
    },
    style: {
      backgroundColor: "#8BC34A",
      height: 56
    },
    navigationOptions: {
      header: null,
      androidStatusBarColor:'#689F38'},
    showLabel: true,
    showIcon: true
  },
  
},
);


