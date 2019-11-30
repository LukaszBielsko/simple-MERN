import  * as actionTypes from '../actions/actionTypes';

export const getItems = () => {
    return {
        type: actionTypes.GET_ITEMS
    }
}
                                            
export const deleteItem = (id) => {
    return {
        type: actionTypes.DELTE_ITEM,
        
    }
}

export const addItem = () => {
    return {
        type: actionTypes.ADD_ITEM
    }
}