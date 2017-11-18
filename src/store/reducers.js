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
        case C.CHANGE_SCORE:

            const updatedPost = action.payload;
            return state.map(function (post) {
                if (post.id === updatedPost.id) {
                    return updatedPost;
                }
                return post;
            })
        case C.CREATE_POST:
            return ([...state, action.payload]
            )
        case C.DELETE_POST:
            return state.filter(post => action.id !== post.id);
        default:
            return state;
    }
}



export default combineReducers({categories, allPosts});