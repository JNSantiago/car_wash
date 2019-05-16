import React from 'react'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

export const signIn = (email, password) => {
    return (dispatch) => {
        let body = {
            email: 'joao.neto.ninja@gmail.com',
            password: '123456'
        }
        axios.post('http://meubebe.teresina.pi.gov.br/api/login', body)
            .then(res => {
                AsyncStorage.setItem('user', JSON.stringify(res["data"]["success"]))

                dispatch({
                    type: 'SIGN_IN_SUCCESS',
                    payload: {
                        user: res["data"]["success"]
                    }
                })
            }).catch(err => {
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
                    user: user,
                    loadingSplash: false
                }
            })

            return true
        }
    }
}