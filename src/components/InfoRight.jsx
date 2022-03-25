import React from 'react';
import styled from 'styled-components';

const InfoRight = () => {
  return (
    <MatchResult>
      <MatchBox className="win">
        <p className="type">4일 전</p>
        <p className="result">
          #1 <span>/ 8</span>
        </p>
        <p className="track">차이나 황산</p>
        <p className="kart">흰 소 X</p>
        <p className="time">1&apos;23&apos;38</p>
        <p className="open">
          <span></span>
        </p>
      </MatchBox>
      <MatchBox className="">
        <p className="type">4일 전</p>
        <p className="result">
          #1 <span>/ 8</span>
        </p>
        <p className="track">차이나 황산</p>
        <p className="kart">흰 소 X</p>
        <p className="time">1&apos;23&apos;38</p>
        <p className="open">
          <span></span>
        </p>
      </MatchBox>
    </MatchResult>
  );
};

const MatchResult = styled.div`
  width: 100%;

  .win {
    background-color: rgba(0, 119, 255, 0.05);
    border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
  }
`;

const MatchBox = styled.div`
  display: table;
  position: relative;
  width: 100%;
  height: 88px;
  background-color: #fff;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px 1px 1px 4px;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #a1a1a1;
  margin-bottom: 5px;
  font-size: 16px;
  p {
    display: table-cell;
    vertical-align: middle;
    height: 30px;
  }

  .type {
    width: 65px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }
  .result {
    color: #07f;
    opacity: 1;
    width: 140px;
    padding-left: 10px;
    font-size: 30px;
    font-weight: 500;
    font-style: italic;
    text-align: left;
    span {
      margin-left: 5px;
      font-size: 16px;
    }
  }
  .track {
    position: relative;
    width: 150px;
    font-weight: 400;
    text-align: center;
  }
  .kart {
    position: relative;
    width: 150px;
    font-weight: 400;
    text-align: center;
  }
  .time {
    width: 100px;
    font-weight: 500;
    text-align: center;
  }
  .open {
    position: absolute;
    box-sizing: border-box;
    right: 0;
    width: 40px;
    height: 87px;
    line-height: 87px;
    font-weight: 400;
    text-align: center;
    border-left: 1px solid #ebebeb;
    span {
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px;
      border-color: #a1a1a1 transparent transparent transparent;
    }
  }
`;

export default InfoRight;
