import React, { Component } from 'react';
import { StyleSheet, View, 
	Text, Image, 
	ScrollView, TouchableOpacity, 
	Animated, Platform } from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base';
import {Icon} from 'react-native-elements'
import {BottomNavigation, Toolbar, COLOR, ThemeProvider } from 'react-native-material-ui'
 
export default class Howto extends Component
{
	static navigationOptions = {
		tabBarIcon: ({tintColor}) => (
		<Icon name='help-outline' style={{color: tintColor}} />
		)
	};
	constructor()
		{
				super();
				this.state = {  
					ViewArray: [], 
					Disable_Button: false 
				}
				this.animatedValue = new Animated.Value(0);
				this.Array_Value_Index = 0;
		}
 
	render(){
		return(
			<View>
			</View>
		);
	}
}
 
const styles = StyleSheet.create(
{
		MainContainer:
		{
				flex: 1,
				backgroundColor: '#eee',
				justifyContent: 'center',
				paddingTop: (Platform.OS == 'ios') ? 20 : 0
		},
 
		Animated_View_Style:
		{
			flex: 1, 
			justifyContent: 'center',
		},
 
		View_Inside_Text:
		{
				color: '#fff',
				fontSize: 24
		},
 
		TouchableOpacityStyle:{
	
			position: 'absolute',
			width: 50,
			height: 50,
			alignItems: 'center',
			justifyContent: 'center',
			right: 30,
			bottom: 30,
		},
 
		FloatingButtonStyle: {
	
			resizeMode: 'contain',
			width: 50,
			height: 50,
		}
});