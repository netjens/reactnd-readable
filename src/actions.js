import C from './constants'
import * as readableAPI from './readableAPI'

export function loadCategories() {
    return function (dispatch) {

        readableAPI
            .getAllCategories()
            .then(categories => {
                dispatch({
                    type: C.FETCH_CATEGORIES,
                    payload: categories
                })
            })

    }

}

export function loadPosts() {
    return function (dispatch) {
        readableAPI.getAllPosts()
            .then(posts => {
                dispatch({
                    type: C.FETCH_POSTS,
                    payload: posts
                })
            })
    }
}

export function changeScore(id,score) {
    return (
        {
            type: C.CHANGE_SCORE,
            payload: {id,score}
        }
    );
}

