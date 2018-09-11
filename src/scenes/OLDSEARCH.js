import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	Image
} from "react-native";
import { Content, ListItem, List } from 'native-base'

class SearchBody extends Component {

	render() {
		const plantData = this.props.plantData
		return (
			<Content>
				<ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'center' }}>
				</ListItem>
				<List style={{ backgroundColor: 'white' }}>
					<ListItem itemDivider>

						<Text>Nome</Text>
					</ListItem>
					<ListItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<View>
							<Text>{plantData.commomName}</Text>
						</View>
					</ListItem>
					<ListItem itemDivider>
						<Text>Nome Científico</Text>
					</ListItem>
					<ListItem >
						<Text>Malus Domestica</Text>
					</ListItem>

					<ListItem itemDivider>
						<Text>Descrição da Planta</Text>
					</ListItem>
					<ListItem >
						<Text>{plantData.description ? plantData.description : 'Sem descrição'}</Text>
					</ListItem>
					<ListItem itemDivider>
						<Text>Área para Plantio</Text>
					</ListItem>
					<ListItem >
						<Text>{plantData.plantingArea ? plantData.plantingArea : 'Sem informações de Área para plantio'}</Text>
					</ListItem>
					<ListItem itemDivider>
						<Text>Tipos de Terreno</Text>
					</ListItem>
					<ListItem>
						<Text>{plantData.ground ? plantData.ground : 'Sem informações de Terreno'}</Text>
					</ListItem>
					<ListItem itemDivider>
						<Text>Tipos de Clima</Text>
					</ListItem>
					<ListItem>
						<Text>{plantData.climate ? plantData.climate : 'Sem informações'}</Text>
					</ListItem>
					<ListItem itemDivider>
						<Text>Doenças</Text>
					</ListItem>
					<ListItem>
						<Text>{plantData.diseases ? plantData.diseases : 'Sem informações'}</Text>
					</ListItem>
				</List>
			</Content>

		);
	}
}
export default SearchBody;