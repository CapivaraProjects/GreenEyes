import {StackNavigator} from 'react-navigation';
import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import {SearchBar} from 'react-native-elements';
import { Container, Content, List, ListItem, Thumbnail, Text} from 'native-base';
import {Icon} from 'react-native-elements'
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Image,
  View,
} from 'react-native';


export default class Plants extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
    <Icon name='help-outline' style={{color: tintColor}} />
    )
  };    

  render() {
      return (
        <Container>
          <View>
						<Text>Ajuda</Text>
					</View>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
    contentStyle:{
        backgroundColor: "#ffffff"
    }
})