// 액션 타입 지정
export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (nickName, data) => {
  return {
    type: SET_USER_DATA,
    nickName,
    data,
  };
};
