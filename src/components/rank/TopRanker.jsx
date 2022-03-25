import React from 'react';
import styled from 'styled-components';

const TopRanker = () => {
  return (
    <>
      <RankerBox>
        <img src="" />
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
      </RankerBox>
      <RankerBox>
        <img src="" />
        <NameBox></NameBox>
      </RankerBox>
      <RankerBox>
        <img src="" />
        <NameBox></NameBox>
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
  }
  .sub-text {
    font-size: 14px;
    span {
      font-weight: 600;
    }
  }
`;
export default TopRanker;
