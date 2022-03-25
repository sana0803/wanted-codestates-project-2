import React from 'react';
import styled from 'styled-components';
import StatTotal from './StatTotal';
import StatRank from './StatRank';
import Message from './Message';

const UserStat = () => {
  return (
    <StatWrapper>
      <StatBox>
        <StatTotal />
      </StatBox>
      <StatBox>
        <StatRank />
      </StatBox>
      <StatBox>
        <Message />
      </StatBox>
    </StatWrapper>
  );
};

const StatWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 266px;
  display: flex;
  /* flex-wrap: nowrap; */
  /* background-color: yellowgreen; */

  > div:last-child {
    margin-right: 0;
  }
`;

const StatBox = styled.div`
  position: relative;
  width: 327px;
  margin-right: 10px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
`;

export const StatTitle = styled.h5`
  margin: 0 12px;
  padding: 0 8px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #ccc;

  span {
    color: var(--blue);
  }
`;

export const SummaryText = styled.p`
  position: absolute;
  top: 14px;
  right: 20px;
  font-size: 12px;
  /* font-weight: 500; */
  vertical-align: middle;
  span {
    margin-left: 5px;
  }
`;
export default UserStat;
