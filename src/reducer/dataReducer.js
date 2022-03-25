import { SET_USER_DATA } from '../action';
import { initialUserData } from '../util/dummyUserData';

const initialState = {
  nickName: 'BBEESSTT',
  matchData: { ...initialUserData },
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        nickName: action.nickName,
        matchData: action.data,
      };
    default:
      return state;
  }
};
