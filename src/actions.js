import C from './constants'
import * as readableAPI from './readableAPI'

export function loadCategories() {
    return function (dispatch) {

        readableAPI
            .getAllCategories()
            .then(categories => {
                dispatch({ type: C.FETCH_CATEGORIES, payload: categories })
            })

    }

}

export function loadPosts(selectedCategory) {

    return function (dispatch) {
        if (selectedCategory) {
            return readableAPI
                .getAllPostsForCategory(selectedCategory)
                .then(posts => {
                    dispatch({ type: C.FETCH_POSTS, payload: posts })
                })
        } else {
            return readableAPI
                .getAllPosts()
                .then(posts => {
                    dispatch({ type: C.FETCH_POSTS, payload: posts })
                })
        }
    }
}

export function loadPost(id) {
    return function (dispatch) {

        return readableAPI
            .getPost(id)
            .then(post => {
                dispatch({ type: C.UPDATE_POST, payload: post })
            })
    }
}

export function loadComments(parentId) {
    return function (dispatch) {
        return readableAPI.getComments(parentId)
            .then(comments => {
                dispatch({ type: C.FETCH_COMMENTS, parentId: parentId, payload: comments });
            })
    }
}


export function changeScore(id, vote) {
    return function (dispatch) {
        readableAPI
            .vote(id, vote)
            .then(post => {
                dispatch({ type: C.UPDATE_POST, payload: post })
            });
    }
}

export function changeCommentScore(id, vote) {
    return function (dispatch) {
        readableAPI
            .voteComment(id, vote)
            .then(post => {
                dispatch({ type: C.UPDATE_COMMENT, payload: post })
            });
    }
}



export function deletePost(id) {
    return function (dispatch) {
        readableAPI
            .deletePost(id)
            .then((post) => {
                dispatch({ type: C.DELETE_POST, id: post.id })
            })
    }
}


export function deleteComment(id) {
    return function (dispatch) {
        readableAPI
            .deleteComment(id)
            .then(comment => {
                dispatch({ type: C.DELETE_COMMENT, payload: comment })
            })
    }
}

export function createPost(post) {
    return function (dispatch) {
        post.timestamp = Date.now();
        post.id = guid();

        readableAPI
            .createPost(post)
            .then((createdPost) => {
                dispatch({ type: C.CREATE_POST, payload: createdPost })
            });

    }
}

export function updatePost(post) {
    return function (dispatch) {
        readableAPI
            .updatePost(post)
            .then((updatedPost) => {
                dispatch({ type: C.UPDATE_POST, payload: updatedPost })
            });
    }
}

export function updateOrCreateComment(comment) {
    return function (dispatch) {
        if (comment.id) {
            readableAPI
                .updateComment(comment)
                .then((updatedComment) => {
                    dispatch({ type: C.UPDATE_COMMENT, payload: updatedComment })
                });
        } else {
            comment.timestamp = Date.now();
            comment.id = guid();
            readableAPI.createComment(comment)
                .then((createdComment) => {

                    dispatch({ type: C.CREATE_COMMENT, payload: createdComment })
                })
        }
    }
}

export function sortPosts(orderBy, orderDir){
    return function(dispatch){
        dispatch({type: C.SORT_POSTS, payload: { by: orderBy, dir: orderDir}})
    }
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
