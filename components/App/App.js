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
import {Tab} from '../config/router';
import LoginScreen from './LoginScreen';
import Home from './Home';

class App extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <Tab/>
        );
    }
}

AppRegistry.registerComponent('SackPlayer', () => App);