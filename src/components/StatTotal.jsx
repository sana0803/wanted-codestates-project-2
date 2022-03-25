import React from 'react';
import styled from 'styled-components';
import { StatTitle } from './UserStat';
import { SummaryText } from './UserStat';

const StatTotal = () => {
  return (
    <>
      <StatTitle>
        <span>종합&nbsp;&nbsp;</span>전적
      </StatTitle>
      <SummaryText>200전</SummaryText>
      <Wrapper>
        <PieChartBox>
          <p>승률</p>
          <ProgressCircle>
            <Circle>
              <div className="full circle-slice"></div>
              <div className="circle-slice">
                <CircleFill className="circle-fill"></CircleFill>
                <div className="bar"></div>
              </div>
            </Circle>
            <span className="blue">37%</span>
            <CircleOverlay></CircleOverlay>
          </ProgressCircle>
        </PieChartBox>
        <PieChartBox>
          <p>완주율</p>
          <ProgressCircle>
            <Circle>
              <div className="full circle-slice"></div>
              <div className="circle-slice fill-green">
                <CircleFill className="circle-fill green fill-green"></CircleFill>
                <div className="bar fill-green"></div>
              </div>
            </Circle>
            <span className="green">99%</span>
            <CircleOverlay></CircleOverlay>
          </ProgressCircle>
        </PieChartBox>
        <PieChartBox>
          <p>리타이어율</p>
          <ProgressCircle>
            <Circle>
              <div className="full circle-slice"></div>
              <div className="circle-slice">
                <CircleFill className="circle-fill red fill-red"></CircleFill>
                <div className="bar"></div>
              </div>
            </Circle>
            <span className="red fill-red">10%</span>
            <CircleOverlay></CircleOverlay>
          </ProgressCircle>
        </PieChartBox>
      </Wrapper>
      <Bottom>
        <span className="blue">최다주행</span>
        <span>&nbsp;모드</span>
        <span>통합</span>
      </Bottom>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  text-align: center;
`;

const PieChartBox = styled.div`
  position: relative;
  -webkit-box-flex: 1;
  flex: 1;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  border-right: 1px solid #f2f2f2;
  p {
    line-height: 20px;
  }
`;

const ProgressCircle = styled.div`
  margin: 20px auto;
  width: 83px;
  height: 83px;
  background-color: #ebebeb;
  border-radius: 50%;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    /* margin-top: -7px; */
    font-size: 20px;
    z-index: 10;
  }
`;

const Circle = styled.div`
  .full {
    /* transform: rotate(1.8deg); */
  }
  .circle-slice {
    width: 83px;
    height: 83px;
    position: absolute;
    /* -webkit-backface-visibility: hidden; */
    transition: transform 1s, -webkit-transform 1s;
    transition: 1s ease;
    border-radius: 50%;
    clip: rect(0, 83px, 83px, 41.5px);
    /* 이 친구는 50퍼 이하까지만 보여주기 절반 자르는거임*/
  }
  .bar {
    transform: rotate(0.37turn);
    background-color: var(--blue);
  }
  .fill-green {
    background-color: #9bd728;
  }
  .fill-red {
    background-color: #f62459;
  }
`;
const CircleFill = styled.div`
  width: 83px;
  height: 83px;
  position: absolute;
  /* transition: transform 1s, -webkit-transform 1s; */
  transition: 1s ease;
  border-radius: 50%;
  /* clip으로 자르기 계산 top R bottom L*/
  clip: rect(0, 41.5px, 83px, 0);
  background-color: var(--blue);
  /* 37퍼의 경우 180도 기준 1.8*37 */
  transform: rotate(66.6deg);
`;

const CircleOverlay = styled.div`
  width: 68px;
  height: 68px;
  position: absolute;
  margin-left: 7.5px;
  margin-top: 7.5px;
  background-color: #fff;
  border-radius: 50%;
`;

const Bottom = styled.div`
  position: relative;
  margin: 8px 8px 8px 8px;
  padding: 8px 8px 8px 8px;
  border-top: 1px solid #f2f2f2;
  line-height: 30px;
  font-size: 14px;
  span:last-child {
    position: absolute;
    right: 8px;
    font-size: 20px;
    font-weight: 500;
  }
`;

export default StatTotal;
