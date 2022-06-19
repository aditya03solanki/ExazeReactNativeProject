import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import UserDetail from '../reducer/UserDetail';

const rootReducer = combineReducers({
  UserDetail,
});

// using thunk middleware....
// let store = createStore(rootReducer, applyMiddleware(thunk));

let store = configureStore({reducer: rootReducer});

export {store};
