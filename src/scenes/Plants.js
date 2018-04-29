import {StackNavigator} from 'react-navigation';
import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
import {
  Platform,
  StyleSheet,
  View,
  Image
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
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={require('../logo.jpeg')} />
                            <Text>Plants X</Text>
                        </CardItem>

                        <CardItem>                        
                            <Image style={{ resizeMode: 'cover', width: null }} source={require('../tomate.jpg')} /> 
                        </CardItem>
 
                        <CardItem>
                            <Button transparent>
                                <Icon name="ios-color-filter-outline"/>
                                <Text>80 %</Text>
                            </Button>                       
                        </CardItem>
                   </Card>
                </Content>
            </Container>
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


