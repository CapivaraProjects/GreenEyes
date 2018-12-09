import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { config } from '../../config'

class SearchHeader extends Component {
	render() {
		return (
			<SearchBar
				round
				lightTheme
				platform='android'
				onChangeText={this.props.onChangeText}
				returnKeyType="search"
				onSubmitEditing={this.props.plantSearch}
				placeholder='Digite o nome da planta'/>
		);
	}
}
export default SearchHeader;