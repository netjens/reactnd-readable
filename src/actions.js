import C from './constants'
import * as readableAPI from './readableAPI'

export function getCategories() {
    let result = []
    readableAPI
        .getAllCategories()
        .then((categories) => {
            result = categories

        })

    return {
        type: C.FETCH_CATEGORIES,
        payload: categories
    }
}
