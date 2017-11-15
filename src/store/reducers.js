import C from '../constants'
import { combineReducers } from 'redux'

export const fetching = (state = [], action) =>{
    switch(action.type){
        case C.FETCH_CATEGORIES:
            return action.payload
        default:
           return state
    }



}

export default combineReducers({fetching})