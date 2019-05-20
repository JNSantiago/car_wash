import React from 'react'

import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation'
import { TouchableHighlight } from 'react-native'
import { Icon } from 'native-base'

import Home from './screens/Home'
import RegisterCompany from './screens/RegisterCompany'

const HomeStack = createStackNavigator({
    Home: {
        screen: Home
    }
}, {
    defaultNavigationOptions: ({navigation}) => ({
        headerLeft: (
            <TouchableHighlight onPress={() => navigation.openDrawer()}>
                <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 20 }} />
            </TouchableHighlight>
        )
    })
});

const Drawer = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: ({navigation}) => ({
            drawerLabel: 'Início',
            drawerIcon: (
                <Icon ios='ios-home' android="md-home" style={{ fontSize: 20 }} />
            )
        })
    },
    RegisterCompany: {
        screen: RegisterCompany,
        navigationOptions: ({navigation}) => ({
            drawerLabel: 'Cadastrar Empresa',
            drawerIcon: (
                <Icon ios='ios-store' android="md-store" style={{ fontSize: 20 }} />
            )
        })
    },
})

const App = createStackNavigator({
    Drawer: {
        screen: Drawer
    }
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(App)