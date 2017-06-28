import React from 'react';
import Card from './Card';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';
import songList from './test';

var screen = Dimensions.get('window');

export default class VoteScreen extends React.Component {
    
    constructor(){
        super();
        this.state = {
            Queue: [],
        }
    }

    componentWillMount(){
        this.setState({Queue: songList});
    }

    static navigationOptions = {
        title: 'Vote',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size ={35} color={tintColor} /> 
    }

    cardRender(arr){
        var array = arr;
        var rows = []
        for(i = 0; i < array.length; i++){
            rows.push(<Card key={i} art={array[i][0]} title={array[i][1]} artist={array[i][2]}/>) 
        }
        return(<View>{rows}</View>)
    }

    render(){
        return(
            <Image source = {require('../Images/background.jpg')} style={styles.Parent}>
                <View style={styles.status}>
                </View>
                <View style={styles.container}>
                    {this.cardRender(this.state.Queue)}
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
    },
    status: {
        height: 20,
        backgroundColor: 'rgba(255,255,255,.6)',
    },
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});