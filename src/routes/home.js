import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Icon } from 'native-base';

import Home from './../screens/Home'

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            header: {
                visible: true
            },
            headerLeft: <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}} />
        }
    }
});

export default createAppContainer(HomeStack)