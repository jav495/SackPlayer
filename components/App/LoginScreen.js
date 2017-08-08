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
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
//import {StackNavigator, TabNavigator} from 'react-navigation';
import firebase from 'firebase';
import App from '../config/App';
var fbConfig = require('./secret.js');
const firebaseApp = firebase.initializeApp(fbConfig);

export default class LoginScreen extends React.Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'Login',
        
    };

    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile','email']).then(
            function(result) {
                if(result.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then((accessTokenData) => {
                        const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
                        firebase.auth().signInWithCredential(credential).then((result) => {
                            //promise was successful
                            //this.props.navigation.navigate('Application');
                            
                            console.log('login')
                        }, (error) => {
                            //promise was rejected
                            console.log(error);
                        })      
                }, (error => {
                    console.log('An error occurred: ' + error);
                    }))
                }
            },
            function(error) {
                alert('Login fail with errors ' + error);
            }
        );
    }

    render() {
        
        return(
            <Image style={styles.parent}
                source={require('../Images/background.jpg')}
            >
                <View style={styles.parentView}>
                    <View style={styles.logoBox}>
                        <Image source={require('../Images/logo.png')}/>
                    </View>
                    <TouchableOpacity style={styles.loginButton}
                        onPress={this._fbAuth}>
                        <Text style={styles.loginText}>
                            Login with Facebook
                        </Text>
                    </TouchableOpacity>
                </View>
            </Image>
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
    },
    parentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoBox: {
        height: 200,
        width: 200,
        //backgroundColor: 'rgba(0,0,0,.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        padding: 10,
        height: 50,
        width: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B5998',
    },
    loginText: {
        color: 'white',
        padding: 5,
        fontWeight: 'bold',
        fontFamily: 'helvetica',
    }
});
