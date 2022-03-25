import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setUserData } from '../action';
import { getUserInfo } from '../axios/axios.js';

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  // const matches = useSelector(state => state.data?.matchData);
  // console.log(matches);

  const keyup = async e => {
    const text = e.target.value;
    if (e.key === 'Enter') {
      console.log('유저 검색 실행');
      const userMatchData = await getUserInfo(text);
      dispatch(setUserData(text, userMatchData));
      inputRef.current.value = '';
    }
  };

  return (
    <InputBox>
      <SearchInput
        type="text"
        placeholder="닉네임 검색"
        ref={inputRef}
        onKeyUp={keyup}
      />
      <span>
        <FaSearch color="#fff" />
      </span>
    </InputBox>
  );
};

const InputBox = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  width: 220px;
  height: 80%;
  line-height: 55px;

  span {
    vertical-align: baseline;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.3s ease;
    line-height: 55px;
    position: absolute;
    font-size: 14px;
    top: 0;
    right: 0;

    :hover {
      opacity: 1;
    }
  }
`;

const SearchInput = styled.input`
  width: 195px;
  height: 32px;
  padding-left: 10px;
  padding-right: 25px;
  font-size: 12px;
  background-color: transparent;
  outline: 0;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  opacity: 0.5;
  font-family: 'Noto Sans KR', sans-serif;
  transition: 0.3s ease;
  /* padding: 1px 2px; */

  :focus-visible {
    opacity: 1;
  }

  ::placeholder {
    color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
  }
  :hover {
    opacity: 1;
  }
`;
export default Search;
