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
    <Icon name='search' style={{color: tintColor}} />
    )
  };    

  render() {
      return (
        <Container>
          <SearchBar
          lightTheme
          showLoading
          backgroundColor="#DCEDC8"
          platform="android"
          searchIcon={{ size: 24 }}
          onChangeText={('algumacoisa')}
          onClear={('algumacoisa')}
          placeholder='Digite o nome da planta' />
            <Content style={styles.contentStyle}>
                <List>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate.jpg')} />
                        <Text> Tomatão Y</Text>
                        <Text note>Tomate vermelho e saboroso</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate2.jpg')} />
                        <Text> Tomatão Y</Text>
                        <Text note>Tomate vermelho e saboroso</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate3.jpg')} />
                        <Text> Tomatão Y</Text>
                        <Text note>Tomate vermelho e saboroso</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate.jpg')} />
                        <Text> Tomatão Y</Text>
                        <Text note>Tomate vermelho e saboroso</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate3.jpg')} />
                        <Text> Tomatão Y</Text>
                        <Text note>Tomate vermelho e saboroso</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate2.jpg')} />
                        <Text> Tomatão Y</Text>
                        <Text note>Tomate vermelho e saboroso</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate3.jpg')} />
                        <Text> Tomatão Y</Text>
                        <Text note>Tomate vermelho e saboroso</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate3.jpg')} />
                        <Text> Tomatão Y</Text>
                        <Text note>Tomate vermelho e saboroso</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
    contentStyle:{
        backgroundColor: "#ffffff"
    }
})