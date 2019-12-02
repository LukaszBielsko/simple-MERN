import uuid from 'uuid';

import * as actionTypes from '../actions/actionTypes';


const initialState = {
    items: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items: state.items.concat({ id: uuid(), name: action.input })
            }
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.id)
            }
        case actionTypes.ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default reducer;