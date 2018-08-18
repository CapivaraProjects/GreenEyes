import React, { Component } from 'react';
import {Icon} from 'react-native-elements'
import { AppRegistry, 
  Text,
  View, 
  StyleSheet,
  } from 'react-native';


export default class TermsOfUse extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Modal style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal3"} isDisabled={this.state.isDisabled}>
          <View>
          <Text>
            Por favor, leia a seguir os nossos termos de uso do aplicativo:
          </Text>
            <Button onPress={
                this.AddNewCard
                } title="Aceitar">
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffffff',
  },
  title:{
    alignSelf: 'center',
    marginTop: 15 
  }, 

  description:{
    alignSelf: 'center'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal3: {
    height: 300,
    width: 300
  },
  itemStyle: {
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',

  },
  picker: {
    width: 200
  },
});