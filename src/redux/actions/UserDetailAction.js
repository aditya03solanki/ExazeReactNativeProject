import {SET_USER_DETAIL} from './types';

export const setDetail = obj => {
  console.log('action called');
  return {
    type: SET_USER_DETAIL,
    data: obj,
  };
};

export default {
  setDetail,
};
