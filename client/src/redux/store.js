import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import ReduxThunk from 'redux-thunk'
import authReducer from './reducers/auth'

const allReducers = combineReducers({
    auth: authReducer
})

const store = createStore(allReducers, applyMiddleware(ReduxThunk))

export default store
