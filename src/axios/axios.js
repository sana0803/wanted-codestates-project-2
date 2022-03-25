import axios from 'axios';
import { headers } from '../constants';
import { setItems } from '../util/localStorage';
// import { useDispatch } from 'react-redux';
// import { initialUserData } from '../util/dummyUserData';
// import { setUserData } from '../action';

// const dispatch = useDispatch();
export const getUserInfo = async nickname => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/api/users/nickname/${nickname}`,
      headers,
    });
    const data = response.data;
    console.log(data);
    const { accessId } = data;
    return axios({
      method: 'GET',
      url: `/api/users/${accessId}/matches?&limit=20`,
      headers,
    })
      .then(res => res.data)
      .then(matchData => {
        // console.log(matchData);
        const matchList = matchData.matches[0];
        console.log(matchList);
        setItems('nickname', matchList);
        return matchList;
      });
  } catch (error) {
    alert('검색 결과가 없습니다.');
    console.log(error);
    // dispatch(setUserData('BBEESSTT', ...initialUserData));
    // to do : 검색 결과 없을 시 에러 처리, bbeesstt 넣어주기
    // getUserInfo('BBEESSTT');
  }
};
