import  * as actionTypes from '../actions/actionTypes';

export const getItems = () => {
    console.log('getItems action says hallo')
    return {
        type: actionTypes.GET_ITEMS
    }
}
                                            
export const deleteItem = (id) => {
    console.log('deleteItem action, id: ', id)
    return {
        type: actionTypes.DELETE_ITEM,
        id
    }
}

export const addItem = () => {
    return {
        type: actionTypes.ADD_ITEM
    }
}