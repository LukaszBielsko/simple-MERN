import  * as actionTypes from '../actions/actionTypes';

export const getItems = () => {
    console.log('getItems action says hallo')
    return {
        type: actionTypes.GET_ITEMS
    }
}
                                            
export const deleteItem = (id) => {
    return {
        type: actionTypes.DELETE_ITEM,
        id
    }
}

export const addItem = (input) => {
    return {
        type: actionTypes.ADD_ITEM,
        input
    }
}