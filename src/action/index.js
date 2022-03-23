// 액션 타입 지정
export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = data => {
  return {
    type: SET_USER_DATA,
    payload: data,
  };
};
