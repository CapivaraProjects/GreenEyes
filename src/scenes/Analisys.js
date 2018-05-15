import { PropTypes } from 'prop-types';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {BottomNavigation, Toolbar, COLOR, ThemeProvider } from 'react-native-material-ui';
import React, { Component } from 'react';
import ActionButton from 'react-native-action-button';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right} from 'native-base';
import Modal from 'react-native-modalbox'
import ImagePicker from 'react-native-image-picker'
import {Icon} from 'react-native-elements'
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  NativeModules,
  Alert,
  Picker,
  Button,
  PixelRatio,
  Animated
} from 'react-native';

export default class Analisys extends Component {
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
    tabBarIcon: ({tintColor}) => (
    <Icon name='spa' style={{color: tintColor}} />
    )
  };

  state = {
    cardPhoto: null,
  };
  
  AddNewCard = () =>  {
    this.refs.modal3.close();
    var options = {
      title: 'Selecione uma opção',
      takePhotoButtonTitle: 'Tirar Foto',
      chooseFromLibraryButtonTitle: 'Escolher da galeria',
      cancelButtonTitle: 'Cancelar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('Usuário cancelou a escolha de foto');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('Usuário clicou em um botão customizado: ', response.customButton);
      }
      else {
        let source = { uri: 'data:image/jpeg;base64,' + response.data };
        
        this.setState({
          cardPhoto: source
        });

        this.animatedValue.setValue(0);
        let AddNewCard = { Array_Value_Index: this.Array_Value_Index }
        this.setState({ Disable_Button: true, ViewArray: [ ...this.state.ViewArray, AddNewCard, ]}, () =>
        {
          Animated.timing(
              this.animatedValue,
              {
                toValue: 1,
                duration: 400,
                useNativeDriver: true
              }
          ).start(() =>
          {
            this.Array_Value_Index = this.Array_Value_Index + 1;
            this.setState({ Disable_Button: false });
          }); 
        });
      }
    });                  
  }


		render()
		{
				const AnimationValue = this.animatedValue.interpolate(
				{
						inputRange: [ 0, 1 ],
						outputRange: [ -59, 0 ]
				});
 
				let Render_Animated_View = this.state.ViewArray.map(( item, key ) =>
				{
          this.analisysDate='Realizada em: '+new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear();
						if(( key ) == this.Array_Value_Index)
						{
								return(
									<Animated.View 
										key = { key } 
										style = {[ styles.Animated_View_Style,
										{ opacity: this.animatedValue, transform: [{ translateY: AnimationValue }] }]}>
											<Card>
												<CardItem>
													<Left>
														<Icon name='book'/>
															<Body>
																<Text>Analise {item.Array_Value_Index}</Text>
																<Text note>{this.analisysDate}</Text>
															</Body>
													</Left>
												</CardItem>

												<CardItem cardBody>
													<Image source={this.state.cardPhoto}
														style={{height: 140, width: null, flex: 1 }}
													/>
												</CardItem>
												<CardItem>
													<Left>
														<Icon name='insert-chart'/>
														<Text> 80%</Text>
													</Left>
												</CardItem>
											</Card>
									</Animated.View>
							);
						}
						else
						{
								return(
										<View 
											key = { key } 
											style = { styles.Animated_View_Style }>
 											<Card>
												<CardItem>
													<Left>
														<Icon name='book'/>
															<Body>
																<Text>Analise {item.Array_Value_Index}</Text>
																<Text note>{this.analisysDate}</Text>
															</Body>
													</Left>
												</CardItem>

												<CardItem cardBody>
													<Image source={this.state.cardPhoto}
														style={{height: 140, width: null, flex: 1 }}
													/>
												</CardItem>
												<CardItem>
													<Left>
														<Icon name='insert-chart'/>
														<Text> 80%</Text>
													</Left>
												</CardItem>
											</Card>
										</View>
								);
						}
        });
        return(
        <View style = { styles.MainContainer }>
        <ScrollView>
 
          <View style = {{ flex: 1, padding: 2 }}>
          {
              Render_Animated_View
          }
        </View>

        </ScrollView>
        

        <ActionButton 
          buttonColor="#00BCD4" 
          renderIcon={() => <Icon name="add" />} 
          onPress={() => this.refs.modal3.open()} />

        <Modal style={[styles.modal, styles.modal3]}
          position={"center"}
          ref={"modal3"} isDisabled={this.state.isDisabled}>
          <View>
          <Text>
            Selecione a planta a ser classificada:
          </Text>
            <Picker
              style={styles.picker}
              mode="dropdown"
              itemStyle={styles.itemStyle}>
              <Picker.Item label="Tomate" value="tomate" />
            </Picker>
            <Button onPress={
                this.AddNewCard
                } title="Confirmar">
              <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
              { 
                this.state.cardPhoto === null ? <Text>Tire uma foto</Text> :
                <Image style={styles.avatar} source={this.state.cardPhoto} />
              }
              </View>
            </Button>
          </View>
        </Modal>
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