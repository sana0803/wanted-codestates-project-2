import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import { FaInfoCircle } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaRedo } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import { FaCalculator } from 'react-icons/fa';

const UserInfo = () => {
  const { nickName, matches } = useSelector(state => ({
    nickName: state.data?.nickName,
    matches: state.data?.matchData,
  }));
  console.log(matches);
  const character = matches.matches[0].player.character;
  const userImg = `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${character}.png`;

  return (
    <Wrapper>
      <UserProfile>
        <ApiInfo>
          <FaInfoCircle />
          <span>
            카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
          </span>
        </ApiInfo>
        <Nick>
          <UserImg>
            <img src={userImg} />
          </UserImg>
          <UserNameBox>
            <h1>
              {nickName}
              <span></span>
            </h1>
            <Button></Button>
            <UserActionBox>
              <RoundBtn color={'#1f334a'}>
                <FaRedo />
                전적갱신
              </RoundBtn>
              <RoundBtn color={'#1f334a'}>
                <FaBell />
                신고하기
              </RoundBtn>
              <RoundBtn color={'#1f334a'}>
                <FaShareAlt /> 공유하기
              </RoundBtn>
            </UserActionBox>
          </UserNameBox>
          <PageView>
            <p>
              <FaEye size="16" />
              페이지뷰
            </p>
            <p>747</p>
          </PageView>
        </Nick>
      </UserProfile>
      <VsBox>
        1대1 매칭 시뮬레이터 - {nickName}와 가상 대결을 펼쳐보세요.
        <div>
          <RoundBtn color={'#fff'}>
            <FaCalculator />
            매칭하기
          </RoundBtn>
        </div>
      </VsBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 50px;
`;

const UserProfile = styled.div`
  position: relative;
  height: 175px;
  background-color: rgba(0, 0, 0, 0.025);
  /* background-color: #fff; */
  background-image: url(https://tmi.nexon.com/img/background_flag_w.png);
  background-size: cover;
  background-position: 50%;
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
  z-index: 2;
`;

const ApiInfo = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  vertical-align: baseline;

  svg {
    margin-right: 5px;
  }
`;

const Nick = styled.div`
  display: flex;
  padding-top: 26px;
  align-items: center;
`;

const UserImg = styled.div`
  img {
    vertical-align: middle;
    height: 123px;
  }
`;

const UserNameBox = styled.div`
  margin-left: 20px;

  h1 {
    font-size: 45px;
    font-weight: 600;
    line-height: 60px;

    span {
      display: inline-block;
      vertical-align: middle;
      width: 25px;
      height: 25px;
      margin-left: 10px;
      margin-top: -5px;
      background: url('https://tmi.nexon.com/img/icon_l3.png') no-repeat 50%;
      background-size: contain;
    }
  }
`;

const UserActionBox = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
`;

const RoundBtn = styled.div`
  vertical-align: middle;
  display: inline-block;
  margin-top: 20px;
  margin-right: 10px;
  width: 82px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border: 0.7px solid ${props => props.color};
  border-radius: 15px;
  cursor: pointer;

  svg {
    line-height: 1;
    margin-right: 5px;
    vertical-align: middle;
    /* background-color: yellow; */
  }
`;

const PageView = styled.div`
  position: absolute;
  top: 88px;
  right: 40px;
  margin-top: -23.5px;
  color: var(--dark-gray);
  font-weight: 400;
  text-align: center;

  p:first-child {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 14px;
    svg {
      margin-right: 5px;
      line-height: 1;
      display: inline-block;
      vertical-align: baseline;
    }
  }
  p:last-child {
    font-size: 20px;
    margin-top: 8px;
  }
`;

const gradientBG = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
 `;

const VsBox = styled.div`
  position: relative;
  height: 45px;
  line-height: 45px;
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientBG} 20s ease infinite;
  color: #fff;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;

  > div {
    position: absolute;
    vertical-align: middle;
    display: inline-block;
    top: 0;
    right: 0;
    margin-top: -12px;
    margin-right: 10px;
  }
`;

UserInfo.propTypes = {
  nickname: PropTypes.object,
};

export default UserInfo;
