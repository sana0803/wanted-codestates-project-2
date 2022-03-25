import React from 'react';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
import Header from '../components/Header.jsx';
import UserInfo from '../components/UserInfo.jsx';
import UserStat from '../components/UserStat.jsx';
import Tab from '../components/Tab.jsx';
import Information from '../components/Information.jsx';

const Main = () => {
  // const { nickName, matches } = useSelector(state => ({
  //   nickName: state.data?.nickName,
  //   matches: state.data?.matchData,
  // }));
  // console.log(nickName, matches);

  return (
    <>
      <Header></Header>
      <Container>
        <UserInfo></UserInfo>
        <UserStat></UserStat>
        <Tab></Tab>
        <Information />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
`;
export default Main;
