import React from 'react'

import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation'
import { TouchableHighlight } from 'react-native'
import { Icon } from 'native-base'

import Home from './screens/Home'
import Profile from './screens/Profile'

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
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Icon ios='ios-menu' android="md-menu" style={{ fontSize: 20 }} />
        ),
    },
    Profile: {
        screen: Profile
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