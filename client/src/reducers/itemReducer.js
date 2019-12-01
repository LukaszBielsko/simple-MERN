import uuid from 'uuid';

import * as actionTypes from '../actions/actionTypes';


const initialState = {
    items: [
        { id: uuid(), name: 'eggs' },
        { id: uuid(), name: 'steak' },
        { id: uuid(), name: 'meat' },
        { id: uuid(), name: 'milk' }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ITEMS:
            return {
                ...state
            };
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id)
            }
        default:
            return state
    }
}

export default reducer;