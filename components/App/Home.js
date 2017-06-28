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

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    }
    render(){
        return(
            <View>
                <Text>HOME</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});