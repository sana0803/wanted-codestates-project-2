import axios from 'axios';
import { headers } from '../constants';
import { setItems } from '../util/localStorage';
// import { useDispatch } from 'react-redux';
// import { initialUserData } from '../util/dummyUserData';
// import { setUserData } from '../action';

const gameType = [
  {
    id: '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a',
    name: '스피드 개인전',
  },
  {
    id: 'effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e',
    name: '스피드 팀전',
  },
];

export const getUserInfo = async (nickname, typeNum) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/api/users/nickname/${nickname}`,
      headers,
    });
    const data = response.data;
    // console.log(data);
    const { accessId } = data;
    return axios({
      method: 'GET',
      url: `/api/users/${accessId}/matches?&limit=100&match_types=${gameType[typeNum].id}`,
      headers,
    })
      .then(res => res.data)
      .then(matchData => {
        // console.log(matchData);
        const matchList = matchData.matches[0];
        // console.log(matchList);
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
