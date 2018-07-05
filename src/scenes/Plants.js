import React, { Component } from 'react';
import {SearchBar} from 'react-native-elements';
import { Container, Content, List, ListItem, Thumbnail, Text} from 'native-base';
import {Icon} from 'react-native-elements'
import { StyleSheet} from 'react-native';


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
          onChangeText={() => ('guest')}
          onClear={() => ('guest')}
          placeholder='Digite o nome da planta' />
            <Content style={styles.contentStyle}>
                <List>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate.jpg')} />
                        <Text> Tomate X</Text>
                        <Text note> Tomate saboroso</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate2.jpg')} />
                        <Text> Tomate Y</Text>
                        <Text note> Tomate vermelho e escuro</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate3.jpg')} />
                        <Text> Tomate W</Text>
                        <Text note> Tomate pequeno (cereja)</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate.jpg')} />
                        <Text> Tomate M</Text>
                        <Text note> Tomate verde </Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate3.jpg')} />
                        <Text> Tomate Y</Text>
                        <Text note> Tomate vermelho e saboroso</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate2.jpg')} />
                        <Text> Tomate Y</Text>
                        <Text note> Só tomate</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate3.jpg')} />
                        <Text> Tomate Y</Text>
                        <Text note> Tomate muito vermelho</Text>
                    </ListItem>
                    <ListItem button onPress={() => {('guest')}}>
                        <Thumbnail source={require('../tomate3.jpg')} />
                        <Text> Tomatão Y</Text>
                        <Text note> Tomate vermelho e saboroso</Text>
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