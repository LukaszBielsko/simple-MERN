import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';

/* TODO spot the difference ;) */ 
// export const getItems = (dispatch) => {
//     axios.get('/api/items')
//         .then(res =>
//             dispatch({
//                 type: actionTypes.GET_ITEMS,
//                 payload: res.data
//             }))
// }

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(res =>
            dispatch({
                type: actionTypes.GET_ITEMS,
                payload: res.data
            })
        )
};

export const deleteItem = (id) => dispatch => {
    console.log(id)
    axios
        .delete(`/api/items/${id}`)
        .then(() => dispatch(getItems()))
}


export const addItem = (input) => {
    return {
        type: actionTypes.ADD_ITEM,
        input
    }
}

export const setItemsLoading = () => {
    return {
        type: actionTypes.ITEMS_LOADING,
    }
}  