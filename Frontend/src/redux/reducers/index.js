import { combineReducers } from 'redux'
import admin from './admin'

const rootReducer = combineReducers({
    admin: admin,
    
})


export default rootReducer