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
            console.log("entered update post new title" + updatedPost.title);
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



export default combineReducers({categories, allPosts});