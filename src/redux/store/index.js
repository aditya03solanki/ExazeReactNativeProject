import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import UserDetail from '../reducer/UserDetail';

const rootReducer = combineReducers({
  UserDetail,
});

// using thunk middleware....
let store = createStore(rootReducer, applyMiddleware(thunk));

// let store = configureStore({reducer: rootReducer});

export {store};
