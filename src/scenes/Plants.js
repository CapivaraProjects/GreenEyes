import {StackNavigator} from 'react-navigation';
import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import {SearchBar} from 'react-native-elements';
import { Container, Content, List, ListItem, Thumbnail, Text, Icon } from 'native-base';
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
    <Icon name='search' style={{color: tintColor}} />
    )
  };    

  render() {
      return (
        <Container>
          <SearchBar
          lightTheme
          round
          searchIcon={{ size: 24 }}
          onChangeText={('algumacoisa')}
          onClear={('algumacoisa')}
          placeholder='Digite o nome da planta' />
            <Content>
                <List>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../tomate.jpg')} />
                        <Text>Tomatão X</Text>
                        <Text note> Tomate bão e vermelho</Text>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../tomate2.jpg')} />
                        <Text>Tomatão Y</Text>
                        <Text note> Tomate vermelho e saboroso</Text>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('../tomate3.jpg')} />
                        <Text>Tomatão W</Text>
                        <Text note> Tomate pequeno</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
      );
    }
}