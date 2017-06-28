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
import {StackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import Home from './Home';

class App extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <View>
                <Text>yolo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
    }
});

const SackPlayer = StackNavigator({
    Login: {screen: LoginScreen,},
    Home: {screen: Home,},
});
AppRegistry.registerComponent('SackPlayer', () => SackPlayer);