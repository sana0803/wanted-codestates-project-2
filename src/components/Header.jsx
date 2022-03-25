import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Search from './Search';

const tabMenu = [
  { id: 0, title: '홈', address: '/' },
  { id: 1, title: '랭킹', address: '/rank' },
  // { id: 2, title: '카트', address: '/kart' },
  // { id: 3, title: '트랙', address: '/track' },
];

const Header = () => {
  return (
    <HeaderWrap>
      <TopHeader>
        <KartLogo>
          <img src="https://tmi.nexon.com/img/assets/logo_kart.png" />
        </KartLogo>
        <TmiLogo>
          <img src="https://tmi.nexon.com/img/assets/tmi_logo_default_b.svg" />
        </TmiLogo>
        <a
          href="https://kart.nexon.com/Main/Index.aspx"
          target="_blank"
          rel="noreferrer"
        >
          카트라이더 홈페이지 바로가기
        </a>
      </TopHeader>
      <BottomHeader>
        <div id="inner">
          <TabContainer>
            <ListWrap>
              {tabMenu.map((item, idx) => (
                <TabList key={idx}>
                  <NavLink to={item.address} activeclassname="active">
                    <div>{item.title}</div>
                  </NavLink>
                </TabList>
              ))}
            </ListWrap>
          </TabContainer>
          <Search></Search>
        </div>
      </BottomHeader>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 100vw;
  height: 103px;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopHeader = styled.div`
  width: 1000px;
  height: 48px;
  position: relative;

  a:last-child {
    color: var(--dark-gray);
    font-size: 12px;
    position: absolute;
    right: 0;
    line-height: 48px;
    letter-spacing: -1px;
  }
`;

const KartLogo = styled.a`
  position: relative;
  display: inline-block;
  padding-left: 8px;
  height: 48px;
  width: 100px;
  line-height: 48px;

  :hover {
    background-color: #f2f2f2;
  }

  ::before {
    content: '';
    position: absolute;
    top: 22px;
    right: 8px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #ccc;
  }

  img {
    vertical-align: middle;
  }
`;

const TmiLogo = styled.a`
  position: absolute;
  left: 115px;
  line-height: 48px;

  img {
    vertical-align: middle;
  }
`;

const BottomHeader = styled.div`
  width: 100%;
  height: 55px;
  background-color: var(--deep-blue);

  #inner {
    width: 1000px;
    margin: 0 auto;
    position: relative;
  }
`;

const TabContainer = styled.div`
  position: relative;
  z-index: 10;
`;

const ListWrap = styled.ul`
  background: transparent;
  display: block;
  line-height: 55px;
`;

const TabList = styled.li`
  height: 55px;
  font-size: 14px;
  text-align: center;
  width: 120px;
  float: left;

  div {
    width: 80px;
    opacity: 0.5;
    color: #fff;
    position: relative;

    ::after {
      position: absolute;
      display: block;
      content: ' ';
      bottom: 0;
      margin: 0 auto;
      width: 0;
      background-color: #fff;
      border-bottom: 4px solid hsla(0, 0%, 100%, 0);
      transition: all 0.15s ease-in-out;
    }
    :hover {
      opacity: 1;
    }
    :hover::after {
      width: 100%;
    }
  }
  .active div {
    opacity: 1;
    position: relative;
  }
  .active div::after {
    position: absolute;
    display: block;
    content: '';
    left: 0;
    bottom: 0;
    margin: 0 auto;
    width: 100%;
    border-bottom: 4px solid #fff;
  }
  ::after {
    display: block;
    content: '';
    clear: both;
  }
`;

export default Header;
