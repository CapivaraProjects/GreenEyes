import React, { Component } from 'react';
import {Header, Item, Input, Icon, Button} from 'native-base';
import {SearchBar} from 'react-native-elements';
import {
    View,
    StyleSheet
} from 'react-native';

class SearchHeader extends Component {
    render() {
        return (
            <SearchBar
                round
                lightTheme
                onChangeText={this.props.onChangeText}
                returnKeyType="search"
                onSubmitEditing={this.props.plantSearch}
                placeholder='Digite o nome da planta'
            />
        );
    }
}
export default SearchHeader;