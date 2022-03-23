import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getUserInfo } from '../axios/axios.js';

const UserInfo = () => {
  useEffect(() => {
    const data = getUserInfo('BBEESSTT');
    console.log(data);
  }, []);

  return (
    <Wrapper>
      <UserProfile>
        <ApiInfo>
          <i></i>
          카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
        </ApiInfo>
        <Nick>
          <UserImg>
            <img src="" />
          </UserImg>
        </Nick>
      </UserProfile>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1000px;
  height: 700px;
  margin: 0 auto;
  padding-top: 50px;
  background-color: yellowgreen;
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
`;

const Nick = styled.div`
  display: flex;
  padding-top: 26px;
`;

const UserImg = styled.div`
  img {
    vertical-align: middle;
  }
`;
export default UserInfo;
