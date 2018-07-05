import React, { Component } from 'react';
import Modal from 'react-native-modalbox'
import { 
  Container, 
  Content, 
  List, 
  ListItem, 
  Right, 
  InputGroup, 
  Input,  
  Text,
  Button 
} from 'native-base';
import {
  StyleSheet,
  View,
  Picker, 
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

const Item = Picker.Item;
export default class User extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
    <Icon name='person' style={{color: tintColor}} />
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

onClose() {
    console.log('Modal just closed');
}

onOpen() {
    console.log('Modal just openned');
}

onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
}
 
showOptions=()=>{
    Alert.alert("Floating Button Clicked", 'teste');
}

render() {
    return (
        <Container>
            <Content>
                <List>
                    <ListItem>
                        <InputGroup>
                            <Icon name="person" style={styles.iconStyle} />
                            <Input placeholder="Hugo.Yoshimura" />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup>
                            <Icon name="email" style={styles.iconStyle} />
                            <Input placeholder="hugomasayoshi@gmail.com" />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup>
                            <Icon name="language" style={styles.iconStyle} />
                            <View style={styles.languageContainer}>
                                <View>
                                    <Text>Português</Text>
                                </View>
                                <Right>
                                    <TouchableOpacity
                                        onPress={() => this.refs.modal3.open()}>
                                        <Text style={styles.languageButtonText}>Selecionar</Text>
                                    </TouchableOpacity>
                                </Right>
                            </View>
                        </InputGroup>
                    </ListItem>
                    
                </List>
                <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20, backgroundColor: "#03A9F4"}}
                    onPress={() => this.refs.modalPassword.open()}>
                    <Text>Alterar Senha</Text>
                </Button>
            </Content>
            <Modal 
                style={[styles.modal, styles.modal3]} 
                position={"center"} 
                ref={"modal3"} 
                isDisabled={this.state.isDisabled}>
                
                <View>
                    <Text>
                        Selecione um idioma:
                    </Text>
                    <Picker
                        style={styles.picker}
                        mode="dropdown"
                        itemStyle={styles.itemStyle}>
                        <Picker.Item label="Português" value="pt" />
                        <Picker.Item label="English" value="en"/>
                        <Picker.Item label="Espanhol" value="es"/>
                    </Picker>
                </View>
            </Modal>
            <Modal 
                style={[styles.modal, styles.modal3]} 
                position={"center"} 
                ref={"modalPassword"} 
                isDisabled={this.state.isDisabled}>
                
                <View style={styles.blockStyleOld}>
                    <Text style={styles.inputLabel}>
                        Alteração de senha
                    </Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Senha Atual"
                        onChangeText={(value) => this.setState({newPassword: value})}
                    />
                </View>
                <View style={styles.blockStyleButton}>
                    <Button style={styles.buttonStyle}
                        onPress={() => this.refs.modalNewPassword.open()}>
                        <Text>Confirmar</Text>
                    </Button>
                    <TouchableOpacity
                        onPress={() => this.refs.modalForgotten.open()}>
                        <Text style={styles.languageButtonText}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal 
                style={[styles.modal, styles.modal3]} 
                position={"center"} 
                ref={"modalNewPassword"} 
                isDisabled={this.state.isDisabled}>
                
                <View style={styles.blockStyleNew}>
                    <Text style={styles.inputLabel}>
                        Nova senha
                    </Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Nova Senha"
                        onChangeText={(value) => this.setState({checkNewPassword: value})}
                    />
                    <Text style={styles.inputLabel}>
                        Insira novamente a senha nova
                    </Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Insira novamente a senha nova"
                        onChangeText={(value) => this.setState({password: value})}
                    />
                    <Button style={styles.buttonStyle}
                        color= "#ADFF2F"
                        onPress={() =>
                            {
                                alert("Senha alterada com sucesso!");
                                this.refs.modalNewPassword.close();
                                this.refs.modalPassword.close();
                            }
                        }>
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </Button>
                </View>
            </Modal>
            <Modal 
                style={[styles.modal, styles.modal3]} 
                position={"center"} 
                ref={"modalForgotten"} 
                isDisabled={this.state.isDisabled}>
                
                <View style={styles.blockStyleNew}>
                    <TextInput style={styles.input}
                        placeholder="E-mail"
                        onChangeText={(value) => this.setState({email: value})}
                    />
                    <Button style={styles.buttonStyle}
                        color= "#ADFF2F"
                        onPress={() =>
                            {
                                alert("Feito! Siga as instruções no e-mail que enviamos a você!");
                                this.refs.modalForgotten.close();
                                this.refs.modalPassword.close();
                            }
                        }>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </Button>
                </View>
            </Modal>
        </Container>
    );}             
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  
  buttonLanguage: {
    paddingVertical: 5,
    marginBottom: 5
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal3: {
    height: 350,
    width: 300
  },

  picker: {
    width: 200
  },

  itemStyle: {
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',

  },
  
  languageContainer: {
    flexDirection: 'row',
    flex: 1
  },
  
  iconStyle: {
      color: '#212121',
  },

  languageButtonText: {
    color: '#03A9F4',
    fontWeight: 'bold'
  },

  input: {
    width: 200
  },

  inputLabel: {
    width: 200,
    alignItems: 'baseline'
  },

  blockStyleOld: {
    height: 75,
    width: 250,  
    alignItems: 'center',
    //backgroundColor: "#8BC34A"
  },

  blockStyleNew: {
    height: 150,
    width: 250,  
    alignItems: 'center',
    //backgroundColor: "#8BC34A"
  },

  blockStyleButton: {
    height: 50,
    width: 250,
    alignItems: 'center',
    //backgroundColor: "#8BC34A"
  },

  buttonStyle: { 
    alignSelf: 'center', 
    marginTop: 20, 
    marginBottom: 20, 
    backgroundColor: "#03A9F4"
  }

});


