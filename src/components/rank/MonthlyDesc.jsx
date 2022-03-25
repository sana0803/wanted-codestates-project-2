import React from 'react';
import styled from 'styled-components';
import TeamButton from './TeamButton';

const MonthlyDesc = () => {
  return (
    <>
      <PageName>3월 TMI 랭킹</PageName>
      <Line></Line>
      <SubTextFir>
        <span>랭킹 산정기간</span>
        2022년 03월 01일 00:00:00 ~ 2022년 03월 31일 24:00:00
      </SubTextFir>
      <SubText>
        <span>최근 업데이트</span>
        2022년 03월 25일 09:15:41
      </SubText>
      <GuideBtn>랭킹가이드</GuideBtn>
      <ButtonsWrap>
        <TeamButton />
      </ButtonsWrap>
    </>
  );
};

const PageName = styled.p`
  font-size: 22px;
  font-weight: 400;
  padding-left: 10px;
  margin-bottom: 10px;
  line-height: 33px;
  color: #fff;
`;

const Line = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  width: 35px;
  height: 3px;
  background-color: #fff;
`;

const SubTextFir = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-top: 6px;
  padding-left: 10px;
  color: #fff;
  line-height: 18px;
  span {
    font-weight: 500;
    margin-right: 5px;
  }
`;

const SubText = styled.p`
  font-size: 12px;
  font-weight: 400;
  padding-left: 10px;
  color: #fff;
  line-height: 18px;
  span {
    font-weight: 500;
    margin-right: 5px;
  }
`;

const GuideBtn = styled.button`
  position: absolute;
  top: 110px;
  right: 10px;
  border: 1px solid #fff;
  color: #fff;
  background-color: #005fcc;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
`;

const ButtonsWrap = styled.div`
  position: relative;
  height: 45px;
`;
export default MonthlyDesc;
