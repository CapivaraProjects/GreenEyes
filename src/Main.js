import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import React, { Component } from 'react';
import PlantsController from './scenes/PlantsController';
import Howto from './scenes/Howto';
import User from './scenes/User';
import About from './scenes/About';
import AnalisysController from './scenes/AnalisysController';
import TermsOfUse from './scenes/TermsOfUse';
import queueFactory from 'react-native-queue'
import { db } from './index'
import { getAnalisysById } from './api/AnalisysApi'
export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      queue: null
    }
    this.init()
  }

  async init() {
    const queue = await queueFactory()
    queue.addWorker('sync_analysis', async (id, payload) => {
      console.log('Receiveid analysis: ' + payload)
      for (analysis in user.analysis) {
        a = getAnalisysById(analysis.id).response.response
        await new Promise((resolve) => {
          queue.createJob('sync_analysis_results', {
            'results': a.analysis_result
          })
          resolve()
        })
        db.transaction(tx => {
          tx.executeSql('')
        })
      }
    })
    queue.addWorker('sync_analysis_results', async (id, payload) => {
      console.log('Receive analysis: ' + payload)
    })
    queue.start()
    this.setState({
      queue
    });
  }

  static navigationOptions = {
    title: 'Main',
  };
  render() {
    console.log(this.props.navigation.state);
    return (
      <AppTabNavigator screenProps={{token: this.props.navigation.state.params.token, user: this.props.navigation.state.user}}/>
    );
  }
}


const AppTabNavigator = createAppContainer(createBottomTabNavigator({
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
  initialRouteName: 'AnalisysController',
  backgroundColor: "#8BC34A",
  tabBarOptions: {
    activeTintColor: "#212121",
    inactiveTintColor: "#FFFFFF",
    indicatorStyle:{
      height:0
    },
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
    showIcon: true,
  },
  
},
));


