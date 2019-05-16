import React, {Component} from 'react'

import {connect} from 'react-redux'

import { isSignedIn } from './src/actions/auth'

import Home from './src/screens/Home'
import SignIn from './src/screens/SignIn'
import { AsyncStorage } from 'react-native'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      logged: false
    }
    
    if (this.props.isSignedIn()) this.setState({logged: true})
  }

  render() {
    if (this.state.logged) {
      return (
        <Home />
      )
    }
      return (
        <SignIn />
      )
  }
}

const mapStateToProps = store => ({
  user: store.auth.user
})
export default connect(mapStateToProps, { isSignedIn })(App)