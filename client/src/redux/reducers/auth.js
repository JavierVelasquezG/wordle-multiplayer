import { LOGIN, LOGOUT } from '../actions/auth'

const initialState = {
    token: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                token: action.token
            }
            break
        case LOGOUT:
            return initialState
            break

        default:
            return state
            break
    }
}
