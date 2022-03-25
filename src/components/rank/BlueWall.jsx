import React from 'react';
import styled, { keyframes } from 'styled-components';
import MonthlyDesc from './MonthlyDesc';
import TopRanker from './TopRanker';

const BlueWall = () => {
  return (
    <BlueBox>
      <PageDesc>
        <MonthlyDesc />
      </PageDesc>
      <TopRankWrap>
        <TopRanker />
      </TopRankWrap>
      <Wave></Wave>
      <SecondWave></SecondWave>
    </BlueBox>
  );
};

const BlueBox = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  background: var(--deep-blue);
  overflow: hidden;
`;

const PageDesc = styled.div`
  width: 1000px;
  /* width: 1300px; */
  position: relative;
  z-index: 5;
  padding-top: 50px;
  margin: 0 auto;
  background-color: transparent;
`;

const TopRankWrap = styled.div`
  display: flex;
  width: 1000px;
  position: relative;
  z-index: 100;
  padding-top: 55px;
  margin: 0 auto;

  > div:first-child {
    margin-left: 88px;
  }
  > div:last-child {
    margin-right: 88px;
  }
`;

const wave = keyframes`
   0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`;

const swellup = keyframes`
   0%, 100% {
    transform: translate3d(0,5px,0);
  }
  50% {
    transform: translate3d(0,-50px,0);
  }
`;

const swelldown = keyframes`
   0%, 100% {
    transform: translate3d(0,-50px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
`;

const Wave = styled.div`
  animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
    ${swellup} 7s ease -1.25s infinite;
  transform: translateZ(0);
  background: url(https://tmi.nexon.com/img/background_wave.svg) repeat-x;
  position: absolute;
  top: 450px;
  width: 6400px;
  height: 198px;
`;

const SecondWave = styled.div`
  animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
    ${swelldown} 7s ease -1.25s infinite;
  transform: translateZ(0);
  background: url(https://tmi.nexon.com/img/background_wave.svg) repeat-x;
  position: absolute;
  top: 450px;
  width: 6400px;
  height: 198px;
  left: -150px;
`;
export default BlueWall;
