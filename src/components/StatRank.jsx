import React from 'react';
import { StatTitle } from './UserStat';
import { SummaryText } from './UserStat';

const StatRank = () => {
  return (
    <>
      <StatTitle>
        <span>순위변동&nbsp;&nbsp;</span>추이
      </StatTitle>
      <SummaryText>
        <span>
          지난 200경기
          <span className="blue">2.19위</span>
        </span>
        <span>
          최근 50경기
          <span className="blue">1.92위</span>
        </span>
      </SummaryText>
    </>
  );
};

export default StatRank;
