import { PropTypes } from 'prop-types';
import {StackNavigator} from 'react-navigation';
import {BottomNavigation, Toolbar, COLOR, ThemeProvider } from 'react-native-material-ui'
import React, { Component } from 'react';
import { Navigator, NativeModules } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Text, Picker, Button } from 'native-base';
import {Icon} from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

const Item = Picker.Item;
export default class User extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
    <Icon name='account-circle' style={{color: tintColor}} />
    )
  };
  constructor(props) {
    super(props);
    this.state = {
        selectedItem: undefined,
        selected1: 'key0',
        results: {
            items: [],
        },
    };
}
onValueChange(value=string) {
    this.setState({
        selected1: value,
    });
}
render() {
    return (
        <Container>
            <Content>
                <List>
                    <ListItem>
                        <InputGroup>
                            <Input inlineLabel label="First Name" placeholder="John" />
                        </InputGroup>
                    </ListItem>
                
                    <ListItem>
                        <InputGroup>
                            <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                            <Input placeholder="EMAIL" />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup>
                            <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                            <Input placeholder="PASSWORD" secureTextEntry />
                        </InputGroup>
                    </ListItem>
                
                  
                </List>
                <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                    <Text>Sign Up</Text>
                </Button>
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


