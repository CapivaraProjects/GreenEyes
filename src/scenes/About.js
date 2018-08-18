import React, { Component } from 'react';
import {Icon, Avatar, Text} from 'react-native-elements'
import { Image,
  View, 
  StyleSheet,
  ScrollView
  } from 'react-native';
import { Thumbnail,Container, Content} from 'native-base';

export default class About extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
    <Icon name='info' style={{color: tintColor}} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{padding:35}}>
        <Text h3>Sobre o projeto</Text>
        <Text>
          O projeto se originou a partir de um
          projeto de conclusão de curso, onde 
          o objetivo era criar soluções para a área agrícola,
          afim de aumentar a produtividade e a longevidade de plantações.
        </Text>
        <Text h4 style={styles.description2}>Agradecimentos</Text>
        <Text>
          Não podemos nos esquecer de quem nos
          apoiou durante o período de desenvolvimento
          do projeto, portanto, dedicamos agradecimentos especiais a:{"\n"}
          -Professor Pier{"\n"}
          -Familiares e amigos{"\n"}
          -E aqueles que contribuiram de alguma forma para o sucesso do nosso projeto! 
        </Text>
      </View>
      <Container style={{paddingLeft:35, paddingRight:30, paddingTop:2}}>
        <Text h4 style={styles.description2}>A Equipe</Text>
          <Content>
            <View>
              <View>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                  <Avatar
                    medium
                    rounded
                    source={require('./thumbnails/thumb.jpg')}
                    onPress={() => console.log("funciona")}
                    containerStyle={{marginRight: 12}}/>
                    <Avatar
                    medium
                    rounded
                    source={require('./thumbnails/thumb2.jpg')}
                    onPress={() => console.log("funciona")}
                    containerStyle={{marginRight: 12}}/>
                    <Avatar
                    medium
                    rounded
                    source={require('./thumbnails/thumb3.jpg')}
                    onPress={() => console.log("funciona")}
                    containerStyle={{marginRight: 12}}/>
                    <Avatar
                    medium
                    rounded
                    source={require('./thumbnails/thumb4.jpg')}
                    onPress={() => console.log("funciona")}
                    containerStyle={{marginRight: 12}}/>
                    <Avatar
                    medium
                    rounded
                    source={require('./thumbnails/thumb5.jpg')}
                    onPress={() => console.log("funciona")}
                    containerStyle={{marginRight: 12}}/>
                </ScrollView>
              </View>
            </View>
          </Content>
        </Container>
        <Container style={{paddingLeft:35, paddingRight:30}}>
        <Text h4 style={styles.description2}>O repositório</Text>
          <Content>
            <View>
              <Avatar
                medium
                rounded
                source={require('../capivarathumb.png')}
                onPress={() => console.log("funciona")}/>
            </View>
          </Content>
        </Container>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFF',
    flex: 1   
  },

  logoContainer:{
    alignItems:'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: 25,
  },

  logo: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderWidth: 1,
    borderRadius: 150
  },

  description:{
    alignItems:'center',
    flex: 1,
    paddingTop:15,
    alignContent: 'center'
  },

  description2:{
    alignItems:'center',
    justifyContent: 'center',
    paddingTop: 9,
  }
});