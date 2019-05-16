const INITIAL_STATE = {
    user: '',
    loadingSplash: true
}

export const auth = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN_SUCCESS':
            return { ...state, user: action.payload.user, loadingSplash: action.payload.loadingSplash }
        default:
            return state
    }
}