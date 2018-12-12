import React, { Component } from 'react';
import { Container } from 'native-base';
import { List, ListItem, Icon, Text } from "react-native-elements";
import { StyleSheet, Keyboard, View } from 'react-native';
import SearchHeader from './SearchHeader';
import { config } from '../../config'

export default class Plants extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Icon name='search' style={{ color: tintColor }} />
		),
		header: null,
	};
	state = {
		searchPlant: '',
		plant: [],
		plantFound: false,
		data: []
	}

	plantSearch = () => {
		Keyboard.dismiss();
		const plantCommomName = this.state.searchPlant.toLowerCase();
		//192.168.0.100
		fetch(config.API_URL+'/plants/?action=search&scientificName=%20&commonName=' + plantCommomName + '&pageSize=10&offset=0', {
			headers: {
				'Accept': 'application/json',
			}
		}).then((response) => response.json())
			.then(response => {
				if (response.status_code == 200 || response.status_code == 201) {
					this.setState({
						plant: response.commonName,
						plantFound: true,
						data: response
					});
				}
			}).catch((error) => {
				console.error(error);
				this.setState({ plantFound: false });
			});
	}
	
	renderPage = () => {
		this.props.navigation.push('Search');
	}

	renderList(){
		if (this.state.plantFound) {
			//{
				//this.state.data.map((plant, index) => {
					return (
						<View>
							<List>
								<ListItem
									roundAvatar
									avatar={require('../logo.jpeg')}
									title={'Tomate'}
									onPress={() => { this.props.navigation.push('Search'), { plantData: this.state.plant } }}
								/>
							</List>
						</View>
					)
				//}
				//)
			//}
		}
		else {
			console.log("Planta não encontrada");
		}
	}

	render() {
		return (
			<Container style={styles.contentStyle}>
				<View
					paddingTop={15}
					padding={25}>
					<Text h3 >Pesquisar</Text>
				</View>
				<SearchHeader
					value={this.state.searchPlant}
					onChangeText={(searchPlant) => this.setState({ searchPlant })}
					plantSearch={this.plantSearch}
				/>
				{this.renderList()}
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	contentStyle: {
		backgroundColor: "#ffffff",
	}
}
);
