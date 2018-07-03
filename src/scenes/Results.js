import React, { Component } from 'react';
import { Card, CardItem, Body, Left,} from 'native-base';
import {Icon} from 'react-native-elements'
import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	Image,
	View,
	PixelRatio,
	Animated
} from 'react-native';
 
export default class Results extends Component
{
	constructor() {
    super();
      this.state = {  
        ViewArray: [], 
        Disable_Button: false,
        isOpen: false,
        isDisabled: false,
      }
    this.animatedValue = new Animated.Value(0);
    this.Array_Value_Index = 1;
  }
	static navigationOptions = {
		title: 'Results',
		tabBarIcon: ({tintColor}) => (
			<Icon name='spa' style={{color: tintColor}} />
		),
	};

	render(){
		return(
		<View style = { styles.MainContainer }>
        <ScrollView>
        	<View style = {{ flex: 1, padding: 2 }}>
						<Card>
							<CardItem>
								<Left>
									<Icon name='book'/>
										<Body>
											<Text>Doença detectada: Nome X</Text>
											<Text note>Nome científico da doença</Text>
										</Body>
								</Left>
							</CardItem>

							<CardItem cardBody button onPress={() => {('guest')}}>
								<Image source={require('../doenca1.jpeg')}
									style={{height: 110, width: null, flex: 1 }}
								/>
							</CardItem>
							<CardItem>
								<Left>
									<Icon name='insert-chart'/>
									<Text> 82,5%</Text>
								</Left>
							</CardItem>
						</Card>
						<Card>
							<CardItem>
								<Left>
									<Icon name='book'/>
										<Body>
											<Text>Doença detectada: Nome Y</Text>
											<Text note>Nome científico da doença</Text>
										</Body>
								</Left>
							</CardItem>

							<CardItem cardBody button onPress={() => {('guest')}}>
								<Image source={require('../doenca2.jpeg')}
									style={{height: 110, width: null, flex: 1 }}
								/>
							</CardItem>
							<CardItem>
								<Left>
									<Icon name='insert-chart'/>
									<Text> 31,9%</Text>
								</Left>
							</CardItem>
						</Card>  
						<Card>
							<CardItem>
								<Left>
									<Icon name='book'/>
										<Body>
											<Text>Doença detectada: Nome W</Text>
											<Text note>Nome científico da doença</Text>
										</Body>
								</Left>
							</CardItem>

							<CardItem cardBody button onPress={() => {('guest')}}>
								<Image source={require('../doenca2.jpeg')}
									style={{height: 110, width: null, flex: 1 }}
								/>
							</CardItem>
							<CardItem>
								<Left>
									<Icon name='insert-chart'/>
									<Text> 11,6%</Text>
								</Left>
							</CardItem>
						</Card>          
        	</View>
        </ScrollView>
      </View>
		);	
	}
}

const styles = StyleSheet.create({
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
    
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  },
  container: {
    flex: 1,
    backgroundColor : '#BDBDBD'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal3: {
    height: 300,
    width: 300
  },
  
  text: {
    color: "black",
    fontSize: 22
  },
  itemStyle: {
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',

  },
  picker: {
    width: 200
  },

  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }  
});