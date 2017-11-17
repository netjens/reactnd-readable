import C from '../constants'
import { combineReducers } from 'redux'

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
            const { id, score } = action.payload;

            return state.map(function (post) {
                if (post.id === id) {
                    post.voteScore += score;
                }
                return post;
            }
            )



        default:
            return state;
    }
}

export default combineReducers({ categories, allPosts });