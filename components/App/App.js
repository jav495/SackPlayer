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
import {Stack,Tab} from '../config/router';

class App extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <Tab
            />
        );
    }
}

AppRegistry.registerComponent('SackPlayer', () => App);