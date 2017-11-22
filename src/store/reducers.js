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
            return state.map(function (post) {
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
    console.log("im coments reducer: " + JSON.stringify(action.payload));
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
        default:
            return state;
    }

}



export default combineReducers({categories, allPosts,comments});