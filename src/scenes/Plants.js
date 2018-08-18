import React, { Component } from 'react';
import { Container, Content, } from 'native-base';
import {Icon} from 'react-native-elements'
import { StyleSheet, Keyboard} from 'react-native';
import SearchHeader from './SearchHeader';
import SearchBody from './SearchBody';

export default class Plants extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
    <Icon name='search' style={{color: tintColor}} />
    ),
  }; 
  
  state = {
      searchPlant: '',
      plant:{},
      plantFound: false
  }

  plantSearch = () => {
    Keyboard.dismiss()
    const plantCommomName = this.state.searchPlant.toLowerCase();
    const data = [{
        "action":"search",
        "scientificName": "Malus Domestica",
        "commonName": plantCommomName,
    }]
    fetch('http://10.0.2.2:8888/api/gyresources/plants/?action=search&id=1&scientificName=Malus%20Domestica&commonName='+this.state.plantCommomName+'&pageSize=10&offset=10',{
        headers: {
            Accept: 'application/json'
        },
    }).then((responseJson) => {
            this.setState({
                plant: responseJson.message,
                plantFound: true
            }) 
            this.renderPage;
        })
      .catch((error) => {
            console.error(error);
            if(responseJson.status_code != 200)
                this.setState({plantFound: false});
      });
  }
//first we have to bring the list with the result(s)
//after all inside of item of the list we can add a StackNavigator to bring the information of the plant
  renderPage = () => {
      if(this.state.plantFound){
          return <SearchBody plantData={'Apple'}/>
      }
      else{
          console.log("Planta não encontrada")
      }
  }

  render() {
      return (
        <Container>
            <SearchHeader
                value={this.state.searchPlant}
                onChangeText={(searchPlant) => this.setState({searchPlant})}
                plantSearch={this.plantSearch}
            />
            {this.renderPage()}
        </Container>
        
      );
    }
}

const styles = StyleSheet.create({
    contentStyle:{
        backgroundColor: "#ffffff"
    }
})