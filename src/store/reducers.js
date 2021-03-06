import C from '../constants'
import {combineReducers} from 'redux'

export const categories = (state = [], action) => {
    switch (action.type) {
        case C.FETCH_CATEGORIES:
            return action.payload;
        default:
            return state;
    }

}

export const order = (state = {by: "timestamp", dir:C.ORDER_DOWN}, action) =>{
    switch(action.type){
        case C.SORT_POSTS:
            return  action.payload;
            
        default:
            return state;
    }
}

export const allPosts = (state = [], action) => {
    switch (action.type) {
        case C.FETCH_POSTS:
            return action.payload;
        case C.CREATE_POST:
            return ([...state, action.payload]
            )
        case C.DELETE_POST:
            return state.filter(post => action.id !== post.id);
        case C.UPDATE_POST:
            const updatedPost = action.payload;
            if(state.length===0){
                return [updatedPost];
            }
            return state.map(post => {
                if (post.id === updatedPost.id) {
                    return updatedPost;
                }
                return post;
            })
        default:
            return state;
    }
}

export const comments = (state={}, action) =>{
    switch(action.type) {
        case C.FETCH_COMMENTS:
            return {
                [action.parentId]:action.payload
            }
        case C.UPDATE_COMMENT:

            return ({
                ...state, [action.payload.parentId]:[...state[action.payload.parentId].filter(comment=>
                comment.id !== action.payload.id),action.payload]}
            );
        case C.CREATE_COMMENT:
            return ({...state, [action.payload.parentId]:[...state[action.payload.parentId],action.payload]})
        case C.DELETE_COMMENT:
             return ({
                ...state, [action.payload.parentId]:[...state[action.payload.parentId].filter(comment=>
                comment.id !== action.payload.id)]})
        default:
            return state;
    }

}



export default combineReducers({categories, allPosts,comments,order});