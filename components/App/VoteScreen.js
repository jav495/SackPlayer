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
    Dimensions,
    ScrollView,
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

    //TODO: Write Comparison Function
    sortByVote(arr){
        if (arr.score < arr.score)
            return -1;
        if (arr.score > arr.score)
            return 1;
        return 0;
    }

    //TODO: Code to pull selected songs from Server to add to Queue object in order to display in cardRender
    refreshItems(){

    }

    cardRender(arr){
        var array = arr;
        var rows = []
        for(i = 0; i < array.length; i++){
            rows.push(<Card key={i} art={array[i][0]} title={array[i][1]} url={array[i][2]}/>) 
        }
        return(<View>{rows}</View>)
    }

    render(){
        return(
            <View style={styles.Parent}>
                <View style={styles.status}>
                </View>
                <View style={styles.Banner}>
                    <Text style={styles.MenuButton}>Menu</Text>
                </View>
                <View style={styles.container}>
                    <ScrollView>
                        {this.cardRender(this.state.Queue)}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
        backgroundColor: '#121315',
    },
    status: {
        height: 20,
        backgroundColor: 'rgba(255,255,255,.6)',
    },
    Banner: {
        height: 50,
        width: screen.width,
        backgroundColor: '#1A1A1C',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    MenuButton: {
        color: 'white',
        padding: 10,
    },
});