import React from 'react';
import styled from 'styled-components';

const TopRanker = () => {
  return (
    <>
      <RankerBox>
        <img
          className="medal"
          src="https://tmi.nexon.com/img/assets/icon_goldmedal.png"
        />
        <NameBox>
          <p className="ranker-nick">법사케피</p>
          <p className="sub-text">
            순위
            <span>1위</span>
          </p>
          <p className="sub-text">
            누적포인트
            <span>7,339PT</span>
          </p>
        </NameBox>
        <PercentBox>
          <WinDiv>
            <p>승률</p>
            <Circle>
              <CircleOverlay></CircleOverlay>
            </Circle>
            <span className="blue">65%</span>
          </WinDiv>
          <RetireDiv>
            <p>리타이어율</p>
            <Circle>
              <CircleOverlay></CircleOverlay>
            </Circle>
            <span className="red">2%</span>
          </RetireDiv>
        </PercentBox>
      </RankerBox>
      <RankerBox>
        <img
          className="medal"
          src="https://tmi.nexon.com/img/assets/icon_silvermedal.png"
        />
        <NameBox>
          <p className="ranker-nick">헤드리강</p>
          <p className="sub-text">
            순위
            <span>2위</span>
          </p>
          <p className="sub-text">
            누적포인트
            <span>7,339PT</span>
          </p>
        </NameBox>
        <PercentBox>
          <WinDiv>
            <p>승률</p>
            <Circle>
              <CircleOverlay></CircleOverlay>
            </Circle>
            <span className="blue">37%</span>
          </WinDiv>
          <RetireDiv>
            <p>리타이어율</p>
            <Circle>
              <CircleOverlay></CircleOverlay>
            </Circle>
            <span className="red">5%</span>
          </RetireDiv>
        </PercentBox>
      </RankerBox>
      <RankerBox>
        <img
          className="medal"
          src="https://tmi.nexon.com/img/assets/icon_bronzemedal.png"
        />
        <NameBox>
          <p className="ranker-nick">S1주행</p>
          <p className="sub-text">
            순위
            <span>3위</span>
          </p>
          <p className="sub-text">
            누적포인트
            <span>4,814PT</span>
          </p>
        </NameBox>
        <PercentBox>
          <WinDiv>
            <p>승률</p>
            <Circle>
              <CircleOverlay></CircleOverlay>
            </Circle>
            <span className="blue">43%</span>
          </WinDiv>
          <RetireDiv>
            <p>리타이어율</p>
            <Circle>
              <CircleOverlay></CircleOverlay>
            </Circle>
            <span className="red">17%</span>
          </RetireDiv>
        </PercentBox>
      </RankerBox>
    </>
  );
};

const RankerBox = styled.div`
  position: relative;
  display: inline-block;
  -webkit-box-flex: 1;
  flex: 1;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 42px;
  box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
  .medal {
    position: absolute;
    top: -12px;
    left: 10px;
  }
`;

const NameBox = styled.div`
  padding-top: 37px;
  padding-bottom: 20px;
  padding-left: 40px;
  border-radius: 10px;
  background-image: url(https://tmi.nexon.com/img/background_flag_rank.png);
  background-size: cover;
  background-position: 50%;
  .ranker-nick {
    margin-bottom: 13px;
    vertical-align: middle;
    line-height: 27px;
    font-size: 18px;
    font-weight: 700;
    color: var(--blue);
  }
  .sub-text {
    font-size: 14px;
    line-height: 20px;
    span {
      margin-left: 5px;
      font-weight: 700;
    }
  }
`;

const PercentBox = styled.div`
  display: flex;
  border-top: 1px solid #07f;
`;

const WinDiv = styled.div`
  position: relative;
  padding-top: 15px;
  -webkit-box-flex: 1;
  flex: 1;
  text-align: center;
  p {
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: 500;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2px;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: 500;
  }
  ::after {
    position: absolute;
    content: ' ';
    display: block;
    top: 20px;
    right: 0;
    width: 1px;
    height: 75px;
    background-color: #f2f2f2;
    border: none;
    opacity: 1;
  }
`;

const RetireDiv = styled.div`
  position: relative;
  padding-top: 15px;
  -webkit-box-flex: 1;
  flex: 1;
  text-align: center;
  p {
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: 500;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2px;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: 500;
  }
`;

const Circle = styled.div`
  margin: 20px auto;
  width: 57px;
  height: 57px;
  background-color: #ebebeb;
  border-radius: 50%;
`;

const CircleOverlay = styled.div`
  width: 47px;
  height: 47px;
  position: absolute;
  margin-left: 5px;
  margin-top: 5px;
  background-color: #fff;
  border-radius: 50%;
`;
export default TopRanker;
