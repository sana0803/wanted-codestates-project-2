import React from 'react';
import styled from 'styled-components';

const UserStat = () => {
  return (
    <StatWrapper>
      <StatBox>
        <StatTitle>
          <span>종합</span> 전적
        </StatTitle>
      </StatBox>
      <StatBox>
        <StatTitle>
          <span>순위변동</span> 추이
        </StatTitle>
      </StatBox>
      <StatBox>
        <StatTitle>
          <span>응원</span> 한마디
        </StatTitle>
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
  background-color: yellowgreen;

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

const StatTitle = styled.h5`
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
export default UserStat;
