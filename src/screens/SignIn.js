import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
import { isSignedIn, signIn } from './../actions/auth'

import Home from './Home'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit() {
        this.props.signIn();
    }

    render() {
        if (this.props.loginSuccess) return (<Home />)
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="digite seu email" />

                <TextInput
                    style={styles.input}
                    placeholder="digite sua senha" />
                
                <TouchableOpacity onPress={this.submit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    input: {
        borderBottomWidth: 1,
    },
    submitButton: {
        marginTop: 24,
        alignSelf: 'center',
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})

const mapStateToProps = store => ({
    user: store.auth.user,
    loginSuccess: store.auth.loginSuccess
})
export default connect(mapStateToProps, { isSignedIn, signIn })(SignIn)