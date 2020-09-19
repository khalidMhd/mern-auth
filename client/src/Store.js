import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import { signinReducer, signupReducer, admnSigninReducer, resetPasswordReducer, newPasswordReducer } from './reducers/auth'


const userInfo = Cookie.getJSON("userInfo") || null
const adminInfo = Cookie.getJSON("adminInfo") || null

const initialState = { userSignin:{userInfo},adminSignin:{adminInfo}   }
const reducer = combineReducers({
    userSignin:signinReducer,
    userSignup: signupReducer,
    adminSignin: admnSigninReducer,
    passwordReset: resetPasswordReducer,
    newPassword: newPasswordReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store