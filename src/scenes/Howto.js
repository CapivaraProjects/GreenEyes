import React, { Component } from 'react';
import { Icon, Text } from 'react-native-elements'
import {
  View,
  StyleSheet,
} from 'react-native';

export default class Howto extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name='help' style={{ color: tintColor }} />,
    tabBarOptions: {activeTintColor: '#FFFFFF'}
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 25 }}>
          <Text h3>Seja Bem vindo ao GreenEyes</Text>
          <Text>
            Leia atentamente as instruções antes de realizar a sua analise!
        </Text>
        <View flexDirection={'row'}>
          <Text h4 style={styles.description2}>Pesquisar </Text>
          <Icon onPress={()=>this.props.navigation.navigate('PlantsController')} name='search'></Icon>
          </View>
          <Text>
            Nessa seção você consegue procurar por plantas e obter todas as informações
            necessárias para plantio, cultivo, tratamento e diagnóstico.
        </Text>
        <View flexDirection={'row'}>
          <Text h4 style={styles.description2}>Análise </Text>
          <Icon onPress={()=>this.props.navigation.navigate('AnalisysController')} name='spa'></Icon>
          </View>
        <Text>
          Essa seção é direcionada a analise da planta.
          Para iniciar, prescione o botão + para adicionar uma nova análise, 
          após indicar o método de upload da imagem (Tirar foto ou Escolher da galeria)
          tente enquadrar de uma a duas folhas com as manchas que deseja analisar, 
          fazendo isso você facilita e melhora a nossa precisão no diagnóstico!
        </Text>
        <View flexDirection={'row'}>
          <Text h4 style={styles.description2}>Usuário </Text>
          <Icon onPress={()=>this.props.navigation.navigate('User')} name='person'></Icon>
          </View>
        <Text>
          Seção destinada ao usuário, é nela que você consegue alterar os seus dados
          redefinir sua senha, alterar a linguagem de exibição e mais!
        </Text>
        <View flexDirection={'row'}>
          <Text h4 style={styles.description2}>Sobre </Text>
          <Icon onPress={()=>this.props.navigation.navigate('About')} name='info'></Icon>
          </View>
        <Text>
          Sobre o projeto e o desenvolvimento
        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },

  logoContainer: {
    alignItems: 'center',
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

  description: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 15,
    alignContent: 'center'
  },

  description2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 9,
  }
});