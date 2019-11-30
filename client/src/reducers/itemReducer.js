import uuid from 'uuid';

// import  {GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/actionTypes';
import  * as actionTypes from '../actions/actionTypes';


const initialState = {
    items: [
        {id: uuid(), name: 'eggs'},
        {id: uuid(), name: 'steak'},
        {id: uuid(), name: 'meat'},
        {id: uuid(), name: 'milk'}
    ]
} 

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ITEMS:
            return {
                ...state
            }
            default:
                return state
    }
}

export default reducer ;