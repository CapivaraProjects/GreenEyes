import React, { Component } from 'react';
import {Icon, Avatar, Text, Tile} from 'react-native-elements'
import {Content, ListItem} from 'native-base'
import { Image,
  View, 
  StyleSheet,
  ScrollView
  } from 'react-native';
import img from '../macan.jpg'

class SearchBody extends Component {
  static navigationOptions = {
    title: 'SearchBody',
    header: null,
  };

  render() {
    const plantData = this.props.screenProps.plantData
    var plantName = 'Tomate';
    return (
      <Content style={styles.container}>
        <Tile
          imageSrc={img}
          title={plantName ? plantName : 'Sem informações'}
          activeOpacity={0}>
          <View styleName="content">
            <Text>Nome científico: Malus Domestica</Text>
          </View>
        </Tile>
        <ListItem itemDivider style={styles.listitem}>
            <Icon name='description'/><Text h4>Descrição da Planta</Text>
          </ListItem>
        <View style={styles.listDescribe}>
          <Text>{this.props.screenProps.plantData.description ? this.props.screenProps.plantData.description : 'Sem descrição'}</Text>
        </View>
        <ListItem itemDivider style={styles.listitem}>
            <Icon name='brightness-4'/><Text h4>Cultivo</Text>
          </ListItem>
        <View style={styles.listDescribe}>
          <Text>Área para Plantio</Text>
          <Text>{plantData ? plantData : 'Sem informações para plantio'}</Text>
          <Text>Tipos de Terreno</Text>
          <Text>{plantData ? plantData : 'Sem informações para tipo de terreno'}</Text>
          <Text>Clima</Text>
          <Text>{plantData ? plantData : 'Sem informações para clima'}</Text>
        </View>
        <View>
          <ListItem itemDivider style={styles.listitem}>
            <Icon name='bug-report'/><Text h4>Doenças</Text>
          </ListItem>
        </View>
      </Content>
    );
  }
}
export default SearchBody;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFF',
    flex: 1   
  },
  listitem:{
    flexDirection:'row',
    backgroundColor:'#FFF',
    'justifyContent': 'center'
  },
  listDescribe:{
    paddingLeft:15
  }
});