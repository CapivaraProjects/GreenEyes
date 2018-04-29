import { PropTypes } from 'prop-types';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation'
import {BottomNavigation, Toolbar, COLOR, ThemeProvider } from 'react-native-material-ui'
import React, { Component } from 'react';
import Plants from './scenes/Plants';
import Howto from './scenes/Howto';
import User from './scenes/User';
import About from './scenes/About';
import Analisys from './scenes/Analisys';
import { Navigator, NativeModules } from 'react-native';
import {
  Platform,
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
    navigationOptions: {header: null}
  },
  Plants:{
    screen: Plants,
  },
  Analisys:{
    screen: Analisys,
    navigationOptions: {header: null}
  },
  User:{
    screen: User,
    navigationOptions: {header: null}
  },
  About:{
    screen: About,
    navigationOptions: {header: null}
  }
},
{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: "#d1cece",
    showLabel: false,
    showIcon: true
  }
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


