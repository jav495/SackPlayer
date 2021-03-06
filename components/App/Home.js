import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
    Dimensions,
    WebView,
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

    //TODO: Code to pull highest voted song and next song from server to display
    refreshSongs(){

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
            
            <View style={styles.Parent}>
                <View style={styles.Status}>
                </View>
                <View style={styles.Banner}>
                    <Text style={styles.MenuButton}>Menu</Text>
                </View>
                <View style={styles.Main}>
                    <View style={styles.Container}>
                        <Text style={styles.NowPlaying}>Now Playing</Text>
                        {this.renderNowPlaying()}
                    </View>
                    <View style={styles.Container}>
                        <Text style={styles.NowPlaying}>Up Next</Text>
                        {this.renderNextSong()}
                    </View>
                </View>
            </View>
        );
    }
    /*
    render() {
        const vidID = 'z58bg8bHbPU';
        return(
            <View style = {styles.Parent}>
                <WebView source={{uri: 'https://www.youtube.com/embed/' + vidID}}/>
            </View>
        );
    }*/
}

const styles = StyleSheet.create({
    Parent : {
        flex: 1,
        height: null,
        width: null,
        backgroundColor: '#121315',
    },
    Main : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Container : {
        width:screen.width,
        height: (screen.height-110)/2,
        //backgroundColor: 'blue',
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
    Banner: {
        height: 50,
        width: screen.width,
        backgroundColor: '#1A1A1C',
        flexDirection: 'row',
        alignItems: 'center',
    },
    MenuButton: {
        color: 'white',
        padding: 10,
    },


});