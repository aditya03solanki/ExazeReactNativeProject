import type {Node} from 'react';
import {SET_USER_DETAIL} from '../actions/types';

type ReduxState = {
  name: string,
  email: string,
  userName: string,
};

const initialState = {
  name: '',
  userName: '',
  email: '',
};

type Action = {type: string, data: Object};

const UserDetailReducer = (
  state: ReduxState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case SET_USER_DETAIL: {
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
