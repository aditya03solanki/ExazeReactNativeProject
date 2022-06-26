import {SET_USER_DETAIL} from './types';

type ActionParam = {
  name: string,
  email: string,
  userName: string,
};

export const setDetail = (obj: ActionParam) => {
  return {
    type: SET_USER_DETAIL,
    data: obj,
  };
};

export default {
  setDetail,
};
