import { PropTypes } from 'prop-types';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation'
import {BottomNavigation, Toolbar, COLOR, ThemeProvider } from 'react-native-material-ui'
import React, { Component } from 'react';
import { Navigator, NativeModules } from 'react-native';
import {Icon} from 'native-base'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Analisys extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
    <Icon name='camera' style={{color: tintColor}} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          "Minhas Analises (Camera)"
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


