import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class CardComponent extends Component{
    render() {

        const images = {
            "1": require('./tomate.jpg'),
            "2": require('./tomate2.jpg'),
            "3": require('./tomate3.jpg')
        }

        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require
                        ('./logo.jpeg')}/>
                            <Body>
                                <Text>Analise 01x</Text>
                                <Text note>03 de Maio, 20  18</Text>
                            </Body>
                    </Left>
                </CardItem>

                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]}
                     style={{height: 200, width: null, flex: 1 }}
                    />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-color-filter-outline'/>
                            <Text></Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
    }
});