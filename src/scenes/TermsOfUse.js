import React, { Component } from 'react';
import { Icon, Text, Button, Overlay} from 'react-native-elements'
import {
  AppRegistry,
  View,
  StyleSheet,
  ScrollView,
  Modal
} from 'react-native';
import { config } from '../../config'

export default class TermsOfUse extends Component {

  state={
    isVisible: true
  }

  render() {
    return (
      <View>
      <Overlay
      isVisible={this.state.isVisible}>
            <ScrollView style={{padding: 20}}>
              <Text h3>Termos e Condições de uso</Text>
              <Text>Olá. Seja bem-vindo aos nossos Termos e Condições de Uso. Eles são importantes e afetam seus direitos legais, portanto, além deles, também leia atentamente nossa Política de Privacidade e outros termos mencionados nesse documento.</Text>
              <Text h4>Introdução</Text>
              <Text>Agradecemos por escolher o GreenEyes. Ao se inscrever ou usar, de outra forma, o serviço, o aplicativo de software do GreenEyes, acessar qualquer conteúdo ou material que seja disponibilizado pelo GreenEyes por meio do Serviço (o "Conteúdo"), você estará celebrando um contrato vinculativo com o grupo GreenEyes.
                Seu acordo conosco inclui esses Termos e Condições de Uso ("Termos") e nossa Política de Privacidade. Você confirma que leu e compreendeu os Acordos, que aceita esses Acordos e concorda em cumpri-los. Se você não concordar com (ou não puder cumprir) os Acordos, então não poderá usar o Serviço GreenEyes ou acessar nenhum Conteúdo.
                Leia os Acordos atentamente. Eles abrangem informações importantes sobre os serviços do GreenEyes prestados para você. Os Acordos incluem informações sobre futuras alterações nos Acordos, controles de exportação, limitações de responsabilidade, informações de privacidade, uma renúncia de ação coletiva e resolução de disputas por arbitragem em vez de no tribunal.
                Quaisquer informações que você forneceu durante a inscrição poderão ser corrigidas durante o processo de inscrição ao retornar para as telas anteriores e corrigir as informações incorretas.
                Para usar os serviços do GreenEyes ou acessar o Conteúdo, você precisa (1) ter 18 anos ou mais, ou ter 13 anos ou mais e ter o consentimento dos seus pais ou responsável com relação aos Acordos, (2) ter o poder de celebrar um contrato vinculativo conosco e não ser impedido de fazê-lo segundo quaisquer leis aplicáveis e (3) ser residente de um país onde o Serviço está disponível. Você também promete que quaisquer informações de cadastro que enviar para o GreenEyes são verdadeiras, precisas e completas, e concorda em mantê-las dessa forma sempre.
              </Text>
              <Text h4>Alteração nos Acordos</Text>
              <Text>
                Reservamo-nos o direito de modificar ou alterar estes Termos e Condições de qualquer forma. As alterações destes Termos e Condições serão disponibilizadas no aplicativo e serão válidas a partir do momento de sua publicação, independentemente de terem sido vistas pelo usuário. Parte-se do princípio que os usuários aceitaram qualquer alteração, se continuarem a acessar o aplicativo depois daquele momento.
                Podemos alterar este Termo periodicamente. Nesse caso, se forem feitas alterações no Termo, iremos notificá-lo, colocando um aviso destacado no aplicativo e/ou envio de um e-mail para o seu endereço de e-mail. Qualquer alteração neste Termo será imediatamente efetivada para os novos usuários, caso contrário, essas mudanças serão efetivadas após trinta dias do envio de uma notificação por e-mail para o usuário ou trinta dias após a publicação de um aviso no aplicativo. O usuário é responsável, em todos os momentos pela atualização de sua conta, bem como do endereço de e-mail.
          </Text>
              <Text h4>Testes e Manutenções</Text>
              <Text>De tempos em tempos, nós ou outros parceiros em nosso nome poderão exercer testes e manutenções para que possamos desenvolver um serviço cada dia melhor para você.</Text>
              <Text h4>Direitos que concedemos a você</Text>
              <Text>
                Os aplicativos de software e o Conteúdo do GreenEyes são licenciados, e não vendidos, para você, e o GreenEyes detêm a propriedade de todas as cópias dos aplicativos de software e do Conteúdo do GreenEyes, mesmo após a instalação em seus computadores pessoais, celulares, tablets e/ou outros dispositivos relevantes ("Dispositivos").
                Você concorda em cumprir nossas Diretrizes de Usuário e em não usar o Serviço GreenEyes, o Conteúdo, ou qualquer parte deste de qualquer forma que não seja expressamente permitida pelos Acordos. Exceto com relação aos direitos expressamente concedidos a você nesses Acordos, o GreenEyes não concede nenhum direito, título ou interesse a você no Serviço ou Conteúdo GreenEyes
          </Text>
              <Text h4>Conteúdo gerado por usuário</Text>
              <Text>
                Os usuários GreenEyes poderão publicar, fazer upload e/ou contribuir com conteúdo para o Serviço (o que poderá incluir, por exemplo, imagens, texto, mensagens, informações, localização e/ou outros tipos de conteúdo ("Conteúdo do Usuário").
                Você promete que, com relação a qualquer Conteúdo do Usuário publicado no GreenEyes, (1) você terá o direito de postar tal Conteúdo do Usuário e (2) tal Conteúdo do Usuário, ou seu uso pelo GreenEyes conforme contemplado pelos Acordos, não viola os Acordos, a lei aplicável ou a propriedade intelectual (incluindo, entre outros, copyright), publicidade, personalidade, ou outros direitos de outras pessoas ou implica qualquer afiliação ou endosso a você ou ao seu Conteúdo do Usuário por parte do GreenEyes ou de qualquer entidade ou indivíduo sem consentimento expresso por escrito de tal indivíduo ou entidade.
                O GreenEyes poderá, mas não tem obrigação de, monitorar, analisar ou editar o Conteúdo do Usuário. Em todos os casos, o GreenEyes reserva o direito de remover ou desabilitar o acesso a qualquer Conteúdo do Usuário por qualquer ou nenhum motivo, incluindo, entre outros, um Conteúdo do Usuário que, a critério exclusivo do GreenEyes, viola os Acordos. O GreenEyes poderá adotar essas medidas sem notificação prévia a você ou a qualquer terceiro. A remoção ou a desabilitação do acesso ao Conteúdo do Usuário deverá ser a nosso critério exclusivo, e não prometemos remover ou desabilitar o acesso a nenhum Conteúdo do Usuário específico.
                Você é exclusivamente responsável por todo o Conteúdo do Usuário que publica. O GreenEyes não é responsável pelo Conteúdo do Usuário nem endossa nenhuma opinião contida em nenhum Conteúdo do Usuário.
          </Text>
              <Text h4>Ausência de direito</Text>
              <Text>
                Ao enviar mensagens, carregar arquivos, inserir dados ou efetuar qualquer outra forma de comunicação por meio deste website, você estará concedendo ao GreenEyes permissão para: (1) utilizar, para qualquer fim, idéias, conceitos, conhecimentos técnicos ou técnicas contidos em informações prestadas por visitantes deste site; (2)utilizar, modificar, copiar, distribuir, transmitir, exibir publicamente, reproduzir, publicar, sublicenciar, criar trabalhos derivados, transferir ou vender tais comunicações; (3) sublicenciar a terceiros o direito pleno de exercer quaisquer dos direitos acima, concedidos em relação à comunicação;
                (4) explorar quaisquer direitos exclusivos sobre a referida comunicação, inclusive, entre outros, direitos previstos em leis de direitos autorais, marcas registradas, marcas de serviço ou de patentes em qualquer jurisdição pertinente.
          </Text>
              <Text h4>Links para sites de terceiros</Text>
              <Text>
                Neste aplicativo pode conter links para sites operados por terceiros não relacionados com o GreenEyes. Tais links são fornecidos somente para sua conveniência e informação. O GreenEyes não controla esses sites e não assume qualquer responsabilidade em relação ao conteúdo ou ao uso dos mesmos. O fato de o GreenEyes incluir links para tais sites não significa qualquer endosso do material ali contido e nem associação com seus operadores ou com suas operações.
          </Text>
              <Text h4>Divisibilidade</Text>
              <Text>
                Se qualquer parte deste contrato for considerada inválida ou inexeqüível de acordo com a legislação aplicável, então (i) primeiro, a cláusula inválida ou inexeqüível será substituída por uma cláusula válida e exeqüível que seja mais próxima da intenção da cláusula original e o restante do contrato continuará em vigor; ou (ii) segundo, as cláusulas determinadas como inválidas, nulas ou inexeqüíveis por qualquer tribunal de jurisdição competente serão separadas e as cláusulas remanescentes continuarão exeqüíveis dentro dos limites permitidos por lei.
          </Text>
              <Text h4>Jurisdição</Text>
              <Text>
                Este contrato será regido e interpretado de acordo com as leis da República Federativa do Brasil, sem referência à doutrina que possibilita a escolha de foro. Você, neste ato, consente em submeter-se à jurisdição exclusiva do Foro da Comarca de São Paulo, Estado de São Paulo, em relação ao início, prosseguimento ou continuação de qualquer reivindicação.
                Todos os direitos não declarados expressamente neste material estão reservados.
          </Text>
              <Text h3>Política de Privacidade</Text>
              <Text h4>Dados cadastrais</Text>
              <Text>
                Ao fornecer informações pessoais por meio de cadastros, ao criar uma conta própria para utilizar o aplicativo, ao contratar os serviços neste disponibilizados, você preenche cadastros, informando nome, e-mail que são armazenados pelo GreenEyes.
          </Text>
              <Text h4>Log de acesso</Text>
              <Text>
                Nós realizamos a coleta e guarda por 6 (seis) meses de dados sobre o seu acesso às aplicações do GreenEyes conforme determinação legal.
          </Text>
              <Text h4>Para que os Dados são Utilizados?
          </Text>
              <Text>
                As informações que você compartilha com o GreenEyes têm como finalidade a gestão, administração, prestação, ampliação e melhoramento dos Serviços.
          </Text>
              <Text h4>Marketing</Text>
              <Text>
                Além disso, o GreenEyes utilizará seus dados para melhor direcionar a você conteúdo comercial, publicitário ou patrocinado em suas páginas.
          </Text>
              <Text h4>Acesso Interno</Text>
              <Text>
                O GreenEyes mantém rígido controle interno sobre o acesso aos seus dados, ou seja, apenas algumas pessoas no GreenEyes terão acesso aos seus dados e apenas para execução das atividades aqui previstas. Ainda assim, o GreenEyes implementa mecanismos para garantir que não haja qualquer uso indevido de seus dados.
          </Text>
              <Text h4>Autoridade Pública</Text>
              <Text>
                O GreenEyes somente disponibilizará seus dados às Autoridades Públicas quando a requisição para tanto for feita nos moldes da legislação. Não efetuamos essa entrega de forma excessiva, ou quando não estiver em conformidade com as determinações legais.
          </Text>
              <Text h3>Responsabilidades do Usuário</Text>
              <Text h4>Dados de Terceiros</Text>
              <Text>
                Você deve ter extrema cautela ao compartilhar com o GreenEyes dados dos quais você não seja o titular. Da mesma forma que nós respeitamos a sua privacidade, você deve respeitar a privacidade daqueles próximos a você, ou aqueles de quem você tenha acesso aos dados. Se tiver dúvidas quanto ao consentimento desse terceiro para compartilhamento dos dados, não os compartilhe.
          </Text>
              <Text h4>Minha Senha</Text>
              <Text>
                Apesar dos esforços empreendidos pelo GreenEyes a fim de garantir a segurança dos seus dados, a utilização de serviços e o acesso a conteúdos da internet, envolve alguns riscos e exposições. Assim, é imprescindível que você também faça a sua parte, tomando as seguintes medidas que podem reduzir os riscos envolvidos:(1) Nunca informe sua senha a terceiros; (2) Crie uma senha difícil de ser adivinhada, combinando letras, números e caracteres especiais; (3) Evite utilizar uma única senha para vários sites e não se esqueça de trocá-las periodicamente ou imediatamente em caso de suspeita que foi comprometida; (4) Atenção redobrada ao acessar contas pessoais em computadores ou redes de acesso público; (5) Tenha sempre o sistema operacional e antivírus atualizado.A senha é a primeira linha de defesa contra o acesso não autorizado. Quanto mais complexa ela for, mais forte a proteção contra ataques e violação da sua privacidade.
          </Text>
          <Button title={"Aceitar"}></Button>
            </ScrollView>
      </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  title: {
    alignSelf: 'center',
    marginTop: 15
  },

  description: {
    alignSelf: 'center'
  },
});