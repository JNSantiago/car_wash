import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeStack from './home'

const Drawer = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
})

export default createAppContainer(Drawer)