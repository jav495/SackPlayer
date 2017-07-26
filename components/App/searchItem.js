import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

var screen = Dimensions.get('window');

export default class SearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            art: '',
            url: '',
        }
    }
    componentWillMount() {
        this.setState({title: this.props.title, art: this.props.art})
    }

    render(){
        return(
            <View style = {styles.card}>
                <Image style = {styles.albumArt} source={{uri:this.state.art}}>
                </Image>
                <View style ={styles.textContainer}>
                    <Text style={styles.title}>{this.state.title}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: screen.width/6*5,
        height: 60,
        backgroundColor: 'rgba(250,250,250,.7)',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    albumArt: {
        height: 45,
        width: 60,
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        width: screen.width/6*5 - 60, 
    },
    title: {
        fontFamily: 'helvetica',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 10,
    },
});