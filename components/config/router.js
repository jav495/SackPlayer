import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Login from '../App/LoginScreen';
import Home from '../App/Home';
import Search from '../App/Search';
import { Icon } from 'react-native-elements';

export const Stack = StackNavigator({
    Login: {
        screen: Login,
    },
    Home: {
        screen: Home,
    }
});

export const Tab = TabNavigator({
    
    Home: {
        screen: Home,
        
    },
    Search: {
        screen: Search,
        icon: ({ tintColor }) => <Icon name="list" size ={35} color={tintColor} />   
    },
})