import { SET_USER_DATA } from '../action';
import { initialUserData } from '../util/dummyUserData';

const initialState = {
  matchData: { ...initialUserData },
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        matchData: action.payload,
      };
    default:
      return state;
  }
};
