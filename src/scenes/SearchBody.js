import React, { Component } from 'react';
import { Icon, Avatar, Text, Tile } from 'react-native-elements'
import { Content, ListItem } from 'native-base'
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import img from '../tomate2.jpg'

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
    //const plantData = this.props.screenProps.plantData
    var plantData = 'Tomate';
    return (
      <Content style={styles.container}>
        <Tile
          imageSrc={img}
          title={this.plantData ? this.plantData : 'Tomate'}
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
        <View>
          <ListItem itemDivider style={styles.listitem}>
            <Icon name='bug-report' /><Text h4>Doenças</Text>
          </ListItem>
          <View style={styles.listDescribe}>
            <ViewMoreText
              numberOfLines={1}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}
              textStyle={{ textAlign: 'left' }}>
                <Text>Nome comum: Septoriose, pinta-preta-pequena{'\n'}                     </Text>
                <Text>{'\n'}Nome científico{'\n'}Septoria lycopersici{'\n'}</Text>
                <Text>{'\n'}Descrição{'\n'}{'\n'}A septoriose ou pinta-preta-pequena, causada pelo fungo Septoria lycopersici Speg., ocorre em todos os locais de cultura de tomate no mundo. Esta é uma doença de grande importância econômica não só pelo fato de estar amplamente distribuída, mas também por ser muito destrutiva, causando perdas que podem chegar a 100%.{'\n'}</Text>
                <Text>{'\n'}Sintomas{'\n'}{'\n'}A septoriose pode ocorrer em qualquer estágio de desenvolvimento da planta. Nas folhas os primeiros sintomas  são manchas pequenas, encharcadas, de formato circular, que ocorrem na face inferior das folhas, principalmente nas folhas baixeiras mais velhas. Com a evolução da doença, as manchas se tornam circulares, a região central se torna acinzentada e a borda marrom-escura. As manchas podem coalescer, adquirindo um formato irregular.Na região central das lesões podem ser facilmente observadas estruturas de cor preta, que são as estruturas de frutificação do fungo (picnídios).Folhas severamente atacada amarelecem, podendo ocorrer desfolha progressiva de baixo para cima.Geralmente, os frutos produzidos em plantas severamente desfolhadas são pequenos, além de apresentarem queimadura devido à exposição direta ao sol.{'\n'}</Text>
                <Text>{'\n'}Bioecologia{'\n'}{'\n'}Septoria lycopersici é capaz de sobreviver em sementes, hospedeiros alternativos e restos culturais, que são a principal fonte de inóculo inicial. A dispersão ocorre por meio da água de chuva e/ou de irrigação, trabalhadores e implementos agrícolas durante os tratos culturais e insetos que carregam os conídios do fungo, os quais são produzidos dentro dos picnídios em condições de umidade elevada. Longos períodos de umidade relativa elevada, temperaturas amenas e chuvas abundantes são condições ideais para o desenvolvimento da doença e disseminação do fungo.{'\n'}</Text>
                <Text>{'\n'}Controle{'\n'}{'\n'}Práticas culturais Deve-se eliminar as fontes de inóculo inicial através da remoção e destruição dos restos culturais e da rotação de cultura com espécies não hospedeiras. Para o plantio devem-se utilizar mudas sadias. Irrigação por aspersão não é recomendada.Controle químico Fungicidas protetores e sistêmicos são efetivos no controle da septoriose.{'\n'}</Text>
            </ViewMoreText>

            <ViewMoreText
              numberOfLines={1}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}
              textStyle={{ textAlign: 'left' }}>
                <Text>Nome comum: Mancha-bacteriana                                                                      </Text>                        
                <Text>{'\n'}Nome científico{'\n'}Xanthomonas vesicatoria</Text>
                <Text>{'\n'}Descrição{'\n'}{'\n'}A mancha-bacteriana causada por Xanthomonas versicatoria (ex Doidge) Vauterin, Hoste, Kersters (sinônimo Xanthomonas campestris (Pammel) Dowson pv. versicatoria (Doidge) Dye et al.) é uma bacteriose importante economicamente para a cultura do tomate, podendo causar perdas de até 30% na produção de frutos.Esta bactéria ocorre também em berinjela, jiló, pimenta e pimentão.</Text>
                <Text>{'\n'}Sintomas{'\n'}{'\n'}A bactéria pode ocorrer em todos os estágios de desenvolvimento da planta.Nas folhas são observadas manchas encharcadas, distribuídas principalmente nas bordas da folha. Essas manchas tornam-se necróticas e podem coalescer. Podem ocorrer lesões de coloração marrom no caule. Nos frutos as lesões são esbranquiçadas, tornando-se marrons, deprimidas, com aparência áspera e presença de halos encharcados, de cor verde. Quando a infecção ocorre em frutos novos, causa deformação e queda.</Text>
                <Text>{'\n'}Bioecologia{'\n'}{'\n'}A bactéria Xanthomonas versicatoria possui baixa capacidade de sobrevivência em restos culturais nas condições brasileiras, porém sobrevive eficientemente em sementes. A disseminação a longas distâncias ocorre por meio de sementes e mudas doentes, e dentro de uma mesma área por meio de respingos de água da chuva e/ou da irrigação e durante os tratos culturais. De planta a planta a disseminação pode ocorrer ainda pelo contato direto entre folhas. Temperaturas entre 22 e 28 °C e umidade relativa entre 95 e 100%, com presença de água livre, são condições favoráveis à penetração da bactéria, que se dá através das aberturas naturais ou por ferimentos provocados.</Text>
                <Text>{'\n'}Controle{'\n'}{'\n'}Práticas culturais Para o plantio é indispensável o uso de sementes e mudas sadias e de boa qualidade, assim como máquinas e equipamentos limpos. A irrigação deve ser manejada de modo a não favorecer a presença d água livre sobre as plantas. Deve-se realizar rotação de cultura com espécies não hospedeiras por 1 a 2 anos. Controle químico A aplicação de fungicidas cúpricos em caso de ocorrência no campo, é outra possibilidade de controle.</Text>
            </ViewMoreText>

            <ViewMoreText
              numberOfLines={1}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}
              textStyle={{ textAlign: 'left' }}>
                <Text>Nome comum: Ácaro-rajado                                                                            </Text>
                <Text>{'\n'}Nome científico{'\n'}Tetranychus urticae</Text>
                <Text>{'\n'}Descrição{'\n'}{'\n'}Os insetos deste gênero pertencem a um grupo de ácaros que causam danos a várias espécies de plantas. Esta espécie ocorre em várias culturas de importância econômica, como abóbora, algodão, amendoim, berinjela, crisântemo, feijão, maçã, mamão, mamona, melancia, melão, morango, pepino, pêra, pêssego, pimentão, rosa e tomate.</Text>
                <Text>{'\n'}Sintomas{'\n'}{'\n'}Ao sugarem as folhas, aparecem manchas amareladas que, com o passar do tempo, tornam-se pardo-avermelhadas. Ocorre definhamento das plantas e queda na produção. O fruto atacado fica endurecido, seco e com coloração marrom.</Text>
                <Text>{'\n'}Bioecologia{'\n'}{'\n'}São ácaros verdes, com quatro pares de patas. Formam colônias e tecem teias entre as nervuras das folhas mais velhas. A colônia tem aspecto pardo. As fêmeas apresentam duas manchas verde-escuras no dorso e são maiores que os machos.</Text>
                <Text>{'\n'}Controle{'\n'}{'\n'}Controle químico fazer uso de inseticidas específicos, conforme recomendação</Text>
            </ViewMoreText>
            <ViewMoreText
              numberOfLines={1}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}
              textStyle={{ textAlign: 'left' }}>
                <Text>Nome comum: Pinta-preta, mancha-de-Alternaria                      </Text>
                <Text>{'\n'}Nome científico{'\n'}Alternaria solani</Text>
                <Text>{'\n'}Descrição{'\n'}{'\n'}A mancha-de-Alternaria é uma das doenças mais importantes do tomateiro, causando grandes perdas.
                É uma doença encontrada em vários lugares do mundo, e no Brasil está presente em todas as regiões produtoras de tomate.
                A doença ataca todas as partes aéreas da planta, debilitando-a. Os frutos são atacados diretamente, o que causa a perda total dos mesmos.</Text>
                <Text>{'\n'}Sintomas{'\n'}{'\n'}As plantas apresentam manchas marrom-escuras na superfície das folhas mais velhas, quando o ataque é muito severo, as manchas se unem fortemente ocupando quase toda a lâmina foliar, provocando a secagem das folhas, e os frutos ficam expostos ao sol, sofrendo queimaduras severas.
                No fruto o ataque ocorre principalmente na região peduncular dos frutos maduros, produzindo uma podridão escura chamada de mofo-preto; no interior da mancha observam-se também os anéis concêntricos típicos da doença.No caule manchas arredondadas ou elípticas, marrons, mais claras que nas folhas, e no seu interior formam-se também os característicos anéis.</Text>
                <Text>{'\n'}Bioecologia{'\n'}{'\n'}O patógeno pode sobreviver por longos períodos no solo, sobre os restos de colheita ou sobre as plantas voluntárias e nas hospedeiras alternativas que crescem no próprio campo ou na vegetação nativa da vizinhança. Geralmente, o fungo produz grande quantidade de clamidósporos nos restos culturais, responsáveis pela longevidade do inóculo no solo. As sementes contaminam-se facilmente com os esporos do fungo, sendo uma das vias de disseminação da doença a grandes distâncias. Mudas originadas de sementes contaminadas são também uma via importante para a disseminação da doença. Dentro do campo, o patógeno é dispersado pelo vento, respingos da chuva, água de irrigação, insetos, roupa ou mãos dos operários e implementos agrícolas. Temperatura (26-30 °C) e umidade altas durante o verão chuvoso, alta carga de frutos e solo pobre em nitrogênio favorecem o desenvolvimento da doença. Também ocorre no inverno, quando as temperaturas são relativamente altas e a umidade relativa é elevada, principalmente por excesso de irrigação.</Text>
                <Text>{'\n'}Controle{'\n'}{'\n'}É essencial o uso de sementes livres do patógeno, tratadas adequadamente com fungicidas.Deve-se efetuar rotações de culturas, eliminar os restos culturais infectados no final da colheita, controlar as plantas voluntárias e as solanáceas daninhas. As plantações devem ser feitas em áreas arejadas, onde não seja freqüente a formação de orvalho, e irrigar só quando necessário.</Text>
            </ViewMoreText>
          </View>
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