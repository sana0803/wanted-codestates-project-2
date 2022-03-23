import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getUserInfo } from '../axios/axios.js';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../action';
// import { getItems } from '../util/localStorage';
import Header from '../components/Header.jsx';
import UserInfo from '../components/UserInfo.jsx';
import UserStat from '../components/UserStat.jsx';

const Main = () => {
  const dispatch = useDispatch();
  // const [nickname, setNickname] = useState(
  //   getItems('nickname') ? getItems('nickname') : 'BBEESSTT',
  // );

  const matches = useSelector(state => state.data?.matchData);
  console.log(matches);

  useEffect(() => {
    const fetchData = async () => {
      console.log('api 요청이 실행됩니다.');
      const userMatchData = await getUserInfo('BBEESSTT');
      // console.log(userMatchData);
      dispatch(setUserData(userMatchData));
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* 개인전적 조회 페이지 */}
      <Header></Header>
      <Container>
        <UserInfo></UserInfo>
        <UserStat></UserStat>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
  /* background-color: yellowgreen; */
`;
export default Main;
