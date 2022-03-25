import React from 'react';
import styled from 'styled-components';
import { StatTitle } from './UserStat';

const StatTotal = () => {
  return (
    <>
      <StatTitle>
        <span>종합&nbsp;&nbsp;</span>전적
      </StatTitle>
      <Wrapper></Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default StatTotal;
