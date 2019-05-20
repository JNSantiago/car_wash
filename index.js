import React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'

// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

console.disableYellowBox = true;

import DrawerNav from './src/routes'

// App
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('car_wash', () => ReduxApp);