import React, { Component } from 'react';
import { Icon, Avatar, Text, Tile } from 'react-native-elements'
import { Content, ListItem } from 'native-base'
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import img from '../tomate2.jpg';
import store from 'react-native-simple-store'

class SearchBody extends Component {
  static navigationOptions = {
    title: 'SearchBody',
    header: null,
  };

  renderViewMore(onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}>
        <Text style={{ color: 'blue', textAlign: 'right' }}>Ver Mais</Text>
      </TouchableOpacity>
    )
  }

  renderViewLess(onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}>
        <Text style={{ color: 'blue', textAlign: 'right' }}>Ver Menos</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Content style={styles.container}>
        <Tile
          imageSrc={img}
          title='Tomate'
          activeOpacity={0}>
          <View styleName="content">
            <Text>Nome científico: Solanum lycopersicum</Text>
          </View>
        </Tile>
        <ListItem itemDivider style={styles.listitem}>
          <Icon name='description' /><Text h4> Descrição da Planta</Text>
        </ListItem>
        <View style={styles.listDescribe}>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}
            textStyle={{ textAlign: 'left' }}>
            <Text>O tomate é o fruto do tomateiro.
            Da sua família, fazem também parte as berinjelas, as pimentas e os pimentões,
            além de algumas espécies não comestíveis. As plantas crescem tipicamente entre
            1-3 metros de altura e desenvolvendo hastes fracas que se estendem sobre o chão
            ou trepam pelas outras plantas. É uma planta perene no seu habitat nativo,
            embora seja muitas vezes cultivada em climas temperados como anual.
          Um tomate comum médio pesa cerca de 100 gramas.</Text>
          </ViewMoreText>
        </View>
        <ListItem itemDivider style={styles.listitem}>
          <Icon name='brightness-4' /><Text h4> Cultivo</Text>
        </ListItem>
        <View style={styles.listDescribe}>
          <Text>Área para Plantio{'\n'}</Text>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}
            textStyle={{ textAlign: 'left' }}>
            <Text>As mudas podem ser produzidas a partir de sementes colocadas em células de bandejas de isopor,
              preenchidas com substrato comercial. Os materiais e produtos utilizados nessa etapa
              inicial podem ser comprados em lojas especializadas no varejo. {'\n'}Faça irrigações diárias nas mudas, sem excesso de água.</Text>
          </ViewMoreText>
          <Text>Ambiente{'\n'}</Text>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}
            textStyle={{ textAlign: 'left' }}>
            <Text>As temperaturas mais indicadas para o cultivo do tomateiro são as noturnas moderadas,
                entre 15 e 19 ºC, e ,durante o dia, as que se mantêm na faixa de 19 a 24ºC.
                No entanto, a planta também tem bom desenvolvimento em áreas de clima tropical de altitude
                – acima de 800 metros –, subtropical e temperado.
                A cultura se dá bem em solos areno-argilosos, permeáveis e bem drenados.
              Também devem ser profundos, soltos e pouco ácidos, com pH entre 5,5 e 6,5. {'\n'}</Text>
          </ViewMoreText>
          <Text>Dicas {'\n'}</Text>
          <ViewMoreText
            numberOfLines={3}
            renderViewMore={this.renderViewMore}
            renderViewLess={this.renderViewLess}
            textStyle={{ textAlign: 'left' }}>
            <Text>A pouca luminosidade prolonga a fase vegetativa do tomateiro, retardando a produção.
              Por outro lado, alta luminosidade antecipa o início da frutificação.
              A planta não é afetada, significativamente,  pelo comprimento do dia,
              produzindo bem tanto em épocas com dias curtos como longos.
              Assim, o seu pé de tomate floresce o ano todo!.{'\n'}</Text>
          </ViewMoreText>
          <Text>Clima{'\n'}</Text><Text>Ameno</Text>
        </View>
         <ListItem itemDivider style={styles.listitem}>
            <Icon name='bug-report' /><Text h4>Doenças</Text>
          </ListItem>
          
          <View style={{paddingLeft: 15, paddingBottom: 6}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Avatar
                medium
                rounded
                source={{uri :"https://image.ibb.co/f4bk4f/alternaria.jpg"}}
                onPress={() => {
                  this.props.navigation.navigate('Disease', {diseaseInfo: 53})}}
                containerStyle={{ marginRight: 30, marginLeft: 5 }} />
                <Avatar
                medium
                rounded
                source={{uri :"https://image.ibb.co/fffZx0/se.jpg"}}
                onPress={() => {this.props.navigation.navigate('Disease', {diseaseInfo: 54})}}
                containerStyle={{ marginRight: 30 }} />
                <Avatar
                medium
                rounded
                source={{uri :"https://image.ibb.co/jbssjf/tetranychus.jpg"}}
                onPress={() => {this.props.navigation.navigate('Disease', {diseaseInfo: 56})}}
                containerStyle={{ marginRight: 43 }} />
                <Avatar
                medium
                rounded
                source={{uri :"https://image.ibb.co/gXd9VL/xanthomonas.jpg"}}
                onPress={() => {this.props.navigation.navigate('Disease', {diseaseInfo: 52})}}
                containerStyle={{ marginRight: 1 }} />
            </ScrollView>
          </View>
          <View style={{paddingLeft: 15, paddingBottom: 10}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              
              <Text style={{marginRight: 18}}>Alternaria</Text>
              <Text style={{marginRight: 18}}>Septoria</Text>
              <Text style={{marginRight: 18}}>Tetranychus</Text>
              <Text style={{marginRight: 18}}>Xanthomonas</Text>
              </ScrollView>
              </View>
        </Content>
    );
  }

  getText() {
    fetch('http://192.168.43.163:5000/api/gyresources/texts/' + '', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }).then(response => response.json())
      .then(response => {
        if (response.response.status_code == 200 || response.response.status_code == 201) {

        }
   });
  }
}
export default SearchBody;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },
  listitem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    'justifyContent': 'flex-start'
  },
  listDescribe: {
    paddingLeft: 15,
    paddingRight: 15
  }
});