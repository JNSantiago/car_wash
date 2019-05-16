const INITIAL_STATE = {
    user: '',
    loginSuccess: false
}

export const auth = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN_SUCCESS':
            return { ...state, user: action.payload.user, loginSuccess: true }
        case 'SIGN_OUT':
            return { ...state, user: action.payload.user, loginSuccess: false }
        default:
            return state
    }
}