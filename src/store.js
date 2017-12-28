import { createStore, combineReducers, appplyMiddleware, applyMiddleware } from 'redux';
import cartReducer from './reducers/cartReducer';
import wishlistReducer from './reducers/wishlistReducer';

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action : ", action);
    next(action);
}

export default createStore(
    combineReducers({
        cartReducer,
        wishlistReducer
    }), {},
    applyMiddleware(myLogger)
);