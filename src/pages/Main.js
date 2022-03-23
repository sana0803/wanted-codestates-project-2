import React from 'react';
// import { getUserInfo } from '../axios/axios.js';
import Header from '../components/Header.jsx';
import UserInfo from '../components/UserInfo.jsx';

const Main = () => {
  // useEffect(() => {
  //   getUserInfo('BBEESSTT');
  // }, []);

  return (
    <div>
      {/* 개인전적 조회 페이지 */}
      <Header></Header>
      <UserInfo></UserInfo>
    </div>
  );
};

export default Main;
