import axios from 'axios';
import { headers } from '../constants';
import { setItems } from '../util/localStorage';

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
        setItems('nickname', matchData);
        return matchData;
      });
  } catch (error) {
    alert('검색 결과가 없습니다.');
    console.log(error);
    // to do : 검색 결과 없을 시 에러 처리, bbeesstt 넣어주기
    // getUserInfo('BBEESSTT');
  }
};
