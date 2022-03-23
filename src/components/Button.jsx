import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

const Button = () => {
  const [isSelected, setIsSelected] = useState(true);
  // console.log(isSelected);

  return (
    <TeamSelect>
      <One
        className={isSelected ? 'active' : null}
        isSelected={isSelected}
        onClick={() => {
          setIsSelected(true);
        }}
      >
        <span>
          <FaUser size="12" />
        </span>
        개인전
      </One>
      <Team
        // className={isSelected ? 'active' : null}
        onClick={() => {
          setIsSelected(true);
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
  padding-right: 15px;

  ::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 27px;
    right: 0;
    width: 1px;
    height: 14px;
    background-color: #ececec;
  }

  div {
    background: #fff;
    border-color: var(--blue);
    border-style: solid;
    vertical-align: middle;
    display: inline-block;
    margin-top: 20px;
    width: 100px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    color: var(--blue);

    :hover {
      color: #fff;
      background: var(--blue);
    }

    span {
      vertical-align: middle;
      /* background-color: yellow; */
      margin-right: 10px;
      line-height: 1;
    }
  }

  .active {
    background: var(--blue);
    color: #fff;
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
export default Button;
