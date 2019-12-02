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





export const addItem = item => (dispatch) => {
    axios.post('/api/items', item) //save to database
        .then(res => {
            // dispatch action that saves to redux 
            // it saves response from server
            // backend/routes/api/ items   newItem.save().then(item => res.json(item))
            dispatch({ 
                type: actionTypes.ADD_ITEM, 
                payload: res.data
            })
        })
}

export const setItemsLoading = () => {
    return {
        type: actionTypes.ITEMS_LOADING,
    }
}  