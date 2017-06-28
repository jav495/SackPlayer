import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Card from './Card';
import { Icon } from 'react-native-elements';

var screen=Dimensions.get('window');

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" size ={35} color={tintColor} />
    }
    render(){
        return(
            
            <Image style={styles.Parent} source = {require('../Images/Home.jpg')}>
                <View style={styles.Status}>
                </View>
                <View style={styles.Main}>
                    <View style={styles.Container}>
                        <Card title={'Baby Boy'} artist={'Childish Gambino'}/>
                        <Card title={'Redbone'} artist={'Childish Gambino'}/>
                        <Card title={'Stand Tall'} artist={'Childish Gambino'}/>
                    </View>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    Parent : {
        flex: 1,
        height: null,
        width: null,
    },
    Main : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Container : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Status: {
        height: 20,
        width: screen.width,
        backgroundColor: 'rgba(250,250,250,.5)',
    },

});