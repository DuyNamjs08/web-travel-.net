import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import authReducer from '../redux/authSlice'
import travelReducer from '../redux/travelSlice'

const reducer = combineReducers({
    authReducer: authReducer,
    travelReducer : travelReducer
})
const store = configureStore({
    reducer
})
export default store