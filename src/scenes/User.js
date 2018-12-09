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
	Button,
} from 'native-base';
import {
	StyleSheet,
	View,
	Picker,
	TextInput,
	TouchableOpacity,
	Alert
} from 'react-native';
import { Icon, Avatar, Text } from 'react-native-elements';
import img from '../thumbnails/user_icon.png'
import { config } from '../../config'

const Item = Picker.Item;
export default class User extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Icon name='person' style={{ color: tintColor }} />
		)
	};
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			userEmail: '',
			userLanguage: '',
			userPassword: '',
			selectedItem: undefined,
			selected1: 'key0',
			results: {
				items: [],
			},
		};
	}

	onValueChange(value = string) {
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

	showOptions = () => {
		Alert.alert("Floating Button Clicked", 'teste');
	}

	render() {
		return (
			<Container>
				<Content style={styles.container}>
					<View
						paddingTop={15}
						padding={25}>
						<Text h3 >Preferências</Text>
					</View>
					<List style={{ marginTop: 10 }}>
						<ListItem>
							<InputGroup>
								<Icon name="person" style={styles.iconStyle} />
								<Text> {'gvnn'.toUpperCase()}</Text>
							</InputGroup>
						</ListItem>
						<ListItem>
							<InputGroup>
								<Icon name="email" style={styles.iconStyle} />
								<Text> {'giovanni_cs09@hotmail.com'.toUpperCase()}</Text>
							</InputGroup>
						</ListItem>
						<ListItem>
							<InputGroup>
								<Icon name="language" style={styles.iconStyle} />
								<View style={styles.languageContainer}>
									<View>
										<Text> Português</Text>
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
					<Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20, backgroundColor: "#03A9F4" }}
						onPress={() => this.refs.modalPassword.open()}>
						<Text style={styles.buttonText}>   Alterar Senha   </Text>
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
							<Picker.Item label="English" value="en" />
							<Picker.Item label="Espanhol" value="es" />
						</Picker>
					</View>
				</Modal>
				<Modal
					style={[styles.modal, styles.modal3]}
					position={"center"}
					ref={"modalPassword"}
					isDisabled={this.state.isDisabled}>

					<View style={styles.blockStyleOld}>
						<Text style={styles.inputLabel}>Alteração de senha</Text>
						<TextInput
							style={styles.input}
							secureTextEntry={true}
							placeholder="Senha Atual"
							onChangeText={(value) => this.setState({ userPassword: value })}
						/>
					</View>
					<View style={styles.blockStyleButton}>
						<Button style={styles.buttonStyle}
							onPress={() => {
								this.refs.modalNewPassword.open()
							}}>
							<Text style={styles.buttonText}>   Confirmar   </Text>
						</Button>
						<TouchableOpacity
							onPress={() => this.refs.modalForgotten.open()}>
							<Text style={styles.buttonText}>Esqueci minha senha</Text>
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
							onChangeText={(value) => this.setState({ checkNewPassword: value })}
						/>
						<Text style={styles.inputLabel}>
							Insira novamente a senha nova
										</Text>
						<TextInput
							style={styles.input}
							secureTextEntry={true}
							placeholder="Insira novamente a senha nova"
							onChangeText={(value) => this.setState({ password: value })}
						/>
						<Button style={styles.buttonStyle}
							color="#ADFF2F"
							onPress={() => {
								alert("Senha alterada com sucesso!");
								this.refs.modalNewPassword.close();
								this.refs.modalPassword.close();
								this.updateUser();
							}
							}>
							<Text style={styles.buttonText}>   Confirmar   </Text>
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
							onChangeText={(value) => this.setState({ email: value })}
						/>
						<Button style={styles.buttonStyle}
							color="#ADFF2F"
							onPress={() => {
								//this.sendEmail();
								this.refs.modalForgotten.close();
								this.refs.modalPassword.close();
							}
							}>
							<Text style={styles.buttonText}>   Enviar   </Text>
						</Button>
					</View>
				</Modal>
			</Container>
		);
	}

	updateUser() {
		fetch(config.API_URL+'/users/', {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + this.props.screenProps.token.token
			},
			body: JSON.stringify({
				id: this.state.id,
				idType: 1,
				email: this.state.userEmail,
				username: this.state.username,
				password: this.state.userPassword,
				dateInsertion: "string",
				dateUpdate: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()
			}),
		}).then(response => response.json())
			.then(response => {
				Alert.alert(title = 'Senha atualizada!');
				console.log(response);
			}).catch(error => {
				console.log(error);
				Alert.alert(
					title = 'Erro!',
					JSON.stringify(error))
			});
	}

	sendEmail() {
		fetch(config.API_URL+'/messageservice/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userEmail: this.state.email,
				coreVerification: this.state.generatedCode,
			}),
		}).then(response => response.json())
			.then(response => {
				Alert.alert(title = 'Sucesso!', 'Enviamos uma nova senha a você!');
				console.log(response);
			}).catch((error) => {
				console.error(error);
			});
	}
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
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
	},
	buttonText: {
		color: 'white'

	}

}
);
