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
export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            art: '',
            score: 0,
        }
    }
    componentWillMount() {
        this.setState({title: this.props.title, artist: this.props.artist, art: this.props.art})
    }
    upvote(){
        console.log("+1");
        this.setState({score: this.state.score+1});
    }
    downvote(){
        this.setState({score: this.state.score-1});
    }
    render(){
        return(
            <View style = {styles.card}>
                <Image style = {styles.albumArt} source={{uri:this.state.art}}>
                </Image>
                <View style ={styles.textContainer}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.title}>{this.state.artist}</Text>
                </View>
                <View style={styles.score}>
                    <TouchableOpacity 
                        onPress={() => this.upvote()}
                    >
                    <Text style={styles.scoreText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.scoreText}>{this.state.score}</Text>
                    <TouchableOpacity
                        onPress={() => this.downvote()}
                    >
                        <Text style={styles.scoreText}>-</Text>
                    </TouchableOpacity>
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
        height: 50,
        width: 50,
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
        flexDirection: 'column',
    },
    title: {
        fontFamily: 'helvetica',
        fontWeight: 'bold',
        color: 'black',
    },
    score: {
        height: 75,
        width: 100,
        position: 'absolute',
        left: screen.width/6*3.5,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    },
    scoreText: {
        fontWeight: 'bold',
        fontSize: 24,
        padding: 5,
    }
});