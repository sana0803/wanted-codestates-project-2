import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = () => {
  const TabContent = [
    { name: '통합', content: '통합' },
    { name: '매우빠름', content: '매우빠름' },
    { name: '무한부스터', content: '무한부스터' },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <TabWrapper>
      <ul>
        {TabContent.map((item, idx) => {
          return (
            <TabList
              key={idx}
              className={`${idx === currentTab ? 'active' : null}`}
              onClick={() => setCurrentTab(idx)}
            >
              {item.name}
            </TabList>
          );
        })}
      </ul>
      <span>리타이어 노출</span>
      <SwitchBox>
        <input type="checkbox" id="switch" />
        <label htmlFor="switch"></label>
      </SwitchBox>
    </TabWrapper>
  );
};

const TabWrapper = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  position: relative;

  .active {
    color: var(--blue);
    position: relative;

    ::after {
      position: absolute;
      content: ' ';
      display: block;
      width: 100%;
      bottom: -1px;
      height: 3px;
      background-color: var(--blue);
      border: none;
      transition: all 0.2s ease-in-out;
    }
  }

  > span {
    position: absolute;
    top: 28px;
    right: 45px;
    vertical-align: middle;
  }
`;

const TabList = styled.li`
  position: relative;
  float: left;
  margin-top: 25px;
  width: 81px;
  height: 35px;
  font-size: 14px;
  text-align: center;
  color: #a1a1a1;
  cursor: pointer;

  :hover {
    color: var(--blue);
    transition: all 0.2s ease-in-out;
  }

  ::after {
    position: absolute;
    content: ' ';
    display: block;
    width: 0;
    bottom: -1px;
    height: 3px;
    background-color: var(--blue);
    border: none;
    transition: all 0.2s ease-in-out;
  }

  :hover::after {
    width: 100%;
  }
`;

const SwitchBox = styled.div`
  input {
    display: none;
  }

  input:checked + label {
    background: #f62459;

    ::after {
      position: relative;
      display: block;
      content: '';
      width: 50%;
      height: 100%;
      left: 50%;
      border-radius: 50%;
      background: #fff;
      transition: all 0.2s ease;
    }
  }

  label {
    position: absolute;
    top: 26px;
    right: 3px;
    outline: 0;
    display: inline-block;
    width: 34px;
    height: 18px;
    cursor: pointer;
    background: #f0f0f0;
    border-radius: 2em;
    padding: 2px;
    transition: all 0.4s ease;
    box-sizing: border-box;
    user-select: none;
    vertical-align: top;

    ::after {
      position: relative;
      display: block;
      content: '';
      width: 50%;
      height: 100%;
      left: 0%;
      border-radius: 50%;
      background: #fff;
      transition: all 0.2s ease;
    }
  }
`;
export default Tab;
