import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import BlueWall from '../components/rank/BlueWall.jsx';
import RankContent from '../components/rank/RankContent.jsx';

const Ranking = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <BlueWall />
        <RankContent />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  /* background-color: #fafafa; */
  padding-bottom: 200px;
  width: 100%;
  min-height: 800px;
`;
export default Ranking;
