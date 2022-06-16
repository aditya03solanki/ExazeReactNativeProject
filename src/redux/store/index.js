import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import UserDetail from '../reducer/UserDetail';

const rootReducer = combineReducers({
  UserDetail,
});

let store = configureStore({reducer: rootReducer});

export {store};
