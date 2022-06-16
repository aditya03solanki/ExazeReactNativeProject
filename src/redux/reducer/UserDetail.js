import {SET_USER_DETAIL} from '../actions/types';

const initialState = {
  name: '',
  userName: '',
  email: '',
};

const UserDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAIL: {
      console.log('inside reducer');
      return {
        ...state,
        name: action.data.name,
        email: action.data.email,
        userName: action.data.userName,
      };
    }
    default:
      return state;
  }
};

export default UserDetailReducer;
