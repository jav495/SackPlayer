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

var screen = Dimensions.get('window');

export default class Search extends React.Component {
    static navigationOptions = {
        title: 'Search',
        tabBarIcon: ({ tintColor }) => <Icon name="search" size ={35} color={tintColor} /> 
    }
    render(){
        return(
            <Image source = {require('../Images/background.jpg')} style={styles.Parent}>
                <View style={styles.status}>
                </View>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={35} color={'white'}/>
                    <TextInput style={styles.searchBar}
                        placeholder='Search for music'
                        placeholderTextColor='white'
                    />
                </View>
                <View style={styles.contentContainer}>
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
    searchContainer: {
        flexDirection:'row',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 100,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    searchBar: {
        flex: 1,
        height: 40,
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    status: {
        height: 20,
        backgroundColor: 'rgba(255,255,255,.6)',
    },
    contentContainer: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.3)',
    }
});