import React from 'react'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

export const signIn = (email, password) => {
    return (dispatch) => {
        let body = {
            email: 'joao.neto.ninja@gmail.com',
            password: '123456'
        }
        axios.post('http://192.168.43.212:3000/auth/sign_in', body)
            .then(res => {
                AsyncStorage.setItem('user', JSON.stringify(res["data"]))

                dispatch({
                    type: 'SIGN_IN_SUCCESS',
                    payload: {
                        user: res["data"]
                    }
                })
            }).catch(err => {
                alert(err)
                dispatch({
                    type: 'INTERNAL_SERVER_ERROR',
                    payload: {
                        error: err
                    }
                })
            })
    }
}

export const isSignedIn = () => {
    return (dispatch) => {
        const user = AsyncStorage.getItem('user')
        if(user !== null) {
            dispatch({
                type: 'SIGN_IN_SUCCESS',
                payload: {
                    user: user
                }
            })

            return true
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        const user = AsyncStorage.removeItem('user')
        if(user !== null) {
            dispatch({
                type: 'SIGN_OUT',
                payload: {
                    user: ''
                }
            })

            return true
        }
    }
}