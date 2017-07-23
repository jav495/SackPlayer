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
import songList from './test';
var screen=Dimensions.get('window');

export default class Home extends React.Component {

    constructor() {
        super();
    }
    

    static navigationOptions = {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" size ={35} color={tintColor} />
    }

    renderNowPlaying(){
        var array = songList;
        if(array.length > 0){
            return(
                <View>
                <Card art={array[0][0]} title={array[0][1]} artist={array[0][2]}/>
                </View>
            )
        } else {
            return(
                <View>
                    <Text>Add Songs to the Queue</Text>
                </View>
            )
        }
    }

    renderNextSong(){
        var array = songList;
        if(array.length > 1){
            return(
                <View>
                <Card art={array[1][0]} title={array[1][1]} artist={array[1][2]}/>
                </View>
            )
        } else {
            return(
                <View>
                    <Text>Add Songs to the Queue</Text>
                </View>
            )
        }
    }
    

    render(){
        return(
            
            <Image style={styles.Parent} source = {require('../Images/Home.jpg')}>
                <View style={styles.Status}>
                </View>
                <View style={styles.Main}>
                    <Text>SACKPLAYER</Text>
                    <View style={styles.Container}>
                        <Text style={styles.NowPlaying}>Now Playing</Text>
                        {this.renderNowPlaying()}
                    </View>
                    <View style={styles.Container}>
                        <Text style={styles.NowPlaying}>Next Song</Text>
                        {this.renderNextSong()}
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
        width:screen.width,
        height: 200,
        backgroundColor: 'rgba(0,0,0,.3)',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    NowPlaying : {
        position: 'absolute',
        top: 10,
        left: 20,
        fontWeight: 'bold',
        fontSize: 32,
        color: 'rgba(255,255,255,.8)',
    },
    Status: {
        height: 20,
        width: screen.width,
        backgroundColor: 'rgba(250,250,250,.5)',
    },

});