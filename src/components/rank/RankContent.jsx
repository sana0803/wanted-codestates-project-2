import React from 'react';
import styled from 'styled-components';

const RankContent = () => {
  return (
    <Wrapper>
      <RankListBox>
        <ul>
          <li>
            <ListHead>
              <span className="rank">#</span>
              <span className="ranker-nick">닉네임 (순위변동)</span>
              <span className="point">누적포인트 (전일대비)</span>
              <span className="run-count">주행횟수</span>
              <span className="avg">평균순위</span>
            </ListHead>
          </li>
          {/* 여기에 랭크 순위별로 */}
          <li>
            <ListItemBox>
              <span className="rank">4</span>
              <span className="ranker-nick">
                <a href="#">1234Kcm</a>
              </span>
              <span className="point">3,608 PT</span>
              <span className="run-count">508회</span>
              <span className="avg">2.3위</span>
            </ListItemBox>
          </li>
        </ul>
      </RankListBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 1000px;
  padding-top: 40px;
  margin: 0 auto;
  background-color: transparent;
`;

const RankListBox = styled.div`
  margin-top: 490px;

  ul {
    li {
      position: relative;
      margin-bottom: 10px;
    }
  }
  .ranker-nick {
    position: absolute;
    left: 220px;
    a {
      vertical-align: middle;
      text-decoration: none;
      color: #1f334a;
      font-size: 16px;
    }
  }
  .point {
    display: inline-block;
    width: 120px;
    position: absolute;
    right: 260px;
  }
  .run-count {
    position: absolute;
    right: 140px;
  }
  .avg {
    position: absolute;
    right: 60px;
  }
`;

const ListHead = styled.div`
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  color: #fff;
  font-weight: 500;

  span {
    vertical-align: middle;
  }
`;

const ListItemBox = styled.div`
  padding-left: 60px;
  line-height: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  font-size: 14px;
  font-weight: 400;
  :hover {
    border: 1px solid var(--blue);
    span {
      color: var(--blue);
    }
    a {
      color: var(--blue);
    }
  }
  .rank {
    vertical-align: middle;
    font-weight: 500;
    font-size: 16px;
  }
`;

export default RankContent;
