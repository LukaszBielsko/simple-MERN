import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {}

// const logger = store => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
// }

// const middleware = [thunk, logger]
const middleware = [thunk]


const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store ;

// // function that takes store as a param
// function logger(store) {
//     // function that takes next (what is next?) as a param and returns another function
//     // next = store.dispatch 
//     return function wrapDispatchToAddLogging(next) {
//         // func that takes action as param and returns whatever
//         // is returned by next, that is passed action as param
//         return function dispatchAndLog(action) {
//             console.log('dispatching', action)
//             let result = next(action)
//             console.log('next state', store.getState())
//             return result
//         }
//     }
// }
// // above function call
// loger(store)(next)(action)