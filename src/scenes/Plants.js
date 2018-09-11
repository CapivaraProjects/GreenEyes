import React, { Component } from 'react';
import { Container, Content, } from 'native-base';
import { List, ListItem, Icon } from "react-native-elements";
import { StyleSheet, Keyboard, View, FlatList } from 'react-native';
import SearchHeader from './SearchHeader';
import SearchBody from './SearchBody';

export default class Plants extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Icon name='search' style={{ color: tintColor }} />
		),
		header: null,
	};

	state = {
		searchPlant: '',
		plant: {},
		plantFound: false
	}

	plantSearch = () => {
		Keyboard.dismiss()
		const plantCommomName = this.state.searchPlant.toLowerCase();
		const data = [{
			"action": "search",
			"scientificName": "Malus Domestica",
			"commonName": plantCommomName,
		}]
		fetch('http://10.0.2.2:5000/api/gyresources/plants/?action=search&id=1&scientificName=Malus%20Domestica&commonName=' + this.state.plantCommomName + '&pageSize=10&offset=10', {
			headers: {
				Accept: 'application/json'
			},
		}).then((response) => response.json())
			.then(response => {
				if (response.status_code == 200 || response.status_code == 201) {
					this.setState({
						plant: response.message,
						plantFound: true,
						data: response.message
					})
				}
			})
			.catch((error) => {
				console.error(error);
				this.setState({ plantFound: false });
			});
	}
	//first we have to bring the list with the result(s)
	//after all inside of item of the list we can add a StackNavigator to bring the information of the plant
	renderPage = () => {
		this.props.navigation.push('Search');
	}

	renderList = () => {
		if (this.state.plantFound) {
			return (<View>
				<List>

					<ListItem
						roundAvatar
						avatar={require('../macan.jpg')}
						title={'Maça'}
						onPress={() => { this.props.navigation.push('Search') }}
					/>
				</List>
			</View>);
		}
		else {
			console.log("Planta não encontrada")
		}
	}

	render() {
		return (
			<Container style={styles.contentStyle}>
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
		backgroundColor: "#ffffff"
	}
})