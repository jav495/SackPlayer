import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    Dimensions,
} from 'react-native';

var screen = Dimensions.get('window');
export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            art: '',
        }
    }
    componentWillMount() {
        this.setState({title: this.props.title, artist: this.props.artist})
    }
    render(){
        return(
            <View style = {styles.card}>
                <Image style = {styles.albumArt} source={require('../Images/album.jpg')}>
                </Image>
                <View style ={styles.textContainer}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.title}>{this.state.artist}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: screen.width/6*5,
        height: 75,
        backgroundColor: 'rgba(250,250,250,.7)',
        flexDirection: 'row',
        marginBottom: 10, 
        alignItems: 'center',
    },
    albumArt: {
        height: 50,
        width: 50,
        marginTop: 5,
        marginLeft: 5,
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column',
    },
    title: {
        fontFamily: 'helvetica',
        fontWeight: 'bold',
        color: 'black',
    }
    
});