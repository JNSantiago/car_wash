import React, {Component} from 'react'

import {connect} from 'react-redux'

import { isSignedIn } from './src/actions/auth'
import SignIn from './src/screens/SignIn'

import DrawerNav from './src/routes'

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
        <DrawerNav />
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