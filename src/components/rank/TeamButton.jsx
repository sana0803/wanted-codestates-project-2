import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

const TeamButton = () => {
  const [isSelected, setIsSelected] = useState(true);
  // console.log(isSelected);

  return (
    <TeamSelect>
      <One
        className={isSelected ? 'active' : null}
        onClick={() => {
          setIsSelected(!isSelected);
        }}
      >
        <span>
          <FaUser size="12" />
        </span>
        개인전
      </One>
      <Team
        className={!isSelected ? 'active' : null}
        onClick={() => {
          setIsSelected(!isSelected);
        }}
      >
        <span>
          <FaUsers size="18" />
        </span>
        팀전
      </Team>
    </TeamSelect>
  );
};

const TeamSelect = styled.div`
  position: relative;
  display: inline-block;
  top: 20px;
  left: 10px;

  /* ::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 5px;
    right: -12px;
    width: 1px;
    height: 14px;
    background-color: #ececec;
  } */
  div {
    vertical-align: middle;
    display: inline-block;
    width: 100px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    border-style: solid;
    border-color: #fff;
    cursor: pointer;
    color: #fff;

    :hover {
      color: var(--deep-blue);
      background: #fff;
    }
    span {
      vertical-align: middle;
      margin-right: 10px;
      line-height: 1;
    }
  }
  .active {
    background: #fff;
    color: var(--deep-blue);
  }
`;

const One = styled.div`
  border-width: 0.7px 0 0.7px 0.7px;
  border-radius: 5px 0 0 5px;
`;

const Team = styled.div`
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 0 5px 5px 0;
`;
export default TeamButton;
