import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Login from '../App/LoginScreen';
import Home from '../App/Home';
import Search from '../App/Search';
import VoteScreen from '../App/VoteScreen';
import App from './App';
import { Icon } from 'react-native-elements';

export const Stack = StackNavigator({
    Login: {
        screen: Login,
    },
    Application: {
        screen: App,
    }
});

export const Tab = TabNavigator({
    
    Home: {
        screen: Home,
    },

    Vote: {
        screen: VoteScreen,
    },

    Search: {
        screen: Search,
          
    }  
}, {
    tabBarOptions: {
        inactiveBackgroundColor: '#1A1A1C',
        activeBackgroundColor: '#1A1A1C',
        activeTintColor: 'white',
    },
})