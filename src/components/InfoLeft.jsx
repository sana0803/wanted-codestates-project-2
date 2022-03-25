import React, { useState } from 'react';
import styled from 'styled-components';
import KartTotal from './KartTotal';
import TrackTotal from './TrackTotal';

const InfoLeft = () => {
  const TabContent = [{ name: '트랙' }, { name: '카트' }];

  const [currentTab, setCurrentTab] = useState(0);
  const [showTrack, setShowTrack] = useState(true);

  const tabHandler = idx => {
    setCurrentTab(idx);
    setShowTrack(!showTrack);
  };

  return (
    <>
      <TabWrapper>
        <ul>
          {TabContent.map((item, idx) => {
            return (
              <TabList
                key={idx}
                className={`${idx === currentTab ? 'active' : null}`}
                onClick={() => tabHandler(idx)}
              >
                {item.name}
              </TabList>
            );
          })}
        </ul>
      </TabWrapper>
      <TableWrapper>{showTrack ? <TrackTotal /> : <KartTotal />}</TableWrapper>
    </>
  );
};

const TabWrapper = styled.div`
  width: 100%;

  .active {
    background-color: #fff;
    border-bottom: 2px solid #07f;
    color: var(--blue);
  }
`;

const TabList = styled.li`
  display: inline-block;
  width: 116px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  background-color: #ebebeb;
  font-size: 14px;
  border-bottom: 2px solid #ebebeb;
  color: #a1a1a1;
  cursor: pointer;

  ::after {
    display: block;
    content: '';
    clear: both;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
`;
export default InfoLeft;
