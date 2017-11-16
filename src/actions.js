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





    /*.then(categories => (
        {
            type: C.FETCH_CATEGORIES,
            payload: categories
        }
    ));*/

}

