import React from 'react';
import styled from 'styled-components';

const TrackTotal = () => {
  const mapImg =
    'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/kartimg/Category/korea_1.png';

  return (
    <>
      <TableTitle>
        <span>트랙&nbsp;&nbsp;</span>전적
      </TableTitle>
      <Summary>
        평균 상위 <span>6.54</span>%
      </Summary>
      <TopTable>
        <DataTitle>
          코리아 제주 해오름 다운힐
          <span className="graph-name">&nbsp;&nbsp;기록분포</span>
        </DataTitle>
        <GraphBox>여기에 차트가 들어감</GraphBox>
      </TopTable>
      <BottomTable>
        <TableBox>
          <thread>
            <tr>
              <th>선택</th>
              <th>트랙</th>
              <th>횟수</th>
              <th>승률</th>
              <th>기록</th>
              <th>상위</th>
            </tr>
          </thread>
          <tbody>
            <tr className="active">
              <td>
                <input type="radio" />
              </td>
              <td className="left">
                <a href="#">
                  <img src={mapImg} />
                  &nbsp;코리아 제주 해오름
                </a>
              </td>
              <td>12</td>
              <td>67%</td>
              <td>1&apos;01&apos;27</td>
              <td>4%</td>
            </tr>
          </tbody>
        </TableBox>
      </BottomTable>
    </>
  );
};

export const TableTitle = styled.h5`
  position: relative;
  padding: 0 8px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #1f334a;
  vertical-align: middle;
  span {
    color: var(--blue);
  }
`;

const Summary = styled.p`
  position: absolute;
  top: 26px;
  right: 28px;
  font-weight: 500;
  span {
    color: var(--blue);
  }
`;

export const TopTable = styled.div`
  border-top: 1px solid #ccc;
  margin: 0 25px 0 25px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const DataTitle = styled.p`
  font-size: 14px;

  .badge {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    text-align: center;
    width: 40px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    font-weight: 400;
    border: 1px solid #1f334a;
    border-radius: 15px;
    color: #1f334a;
  }
  .graph-name {
    color: #a1a1a1;
  }
`;

export const GraphBox = styled.div`
  width: 278px;
  padding: 10px 0;
  text-align: center;
`;

export const BottomTable = styled.div`
  overflow-y: auto;
  height: 235px;
  text-align: center;
  border-top: 1px solid #f2f2f2;
  font-weight: 400;
`;

export const TableBox = styled.table`
  box-sizing: border-box;
  width: calc(100% - 1px);
  font-size: 13px;
  line-height: 35px;
  border-collapse: collapse;
  border-spacing: 0;

  thread {
    display: table-header-group;
    background-color: #fbfbfb;

    tr {
      display: table-row;
      box-sizing: border-box;
      th {
        position: relative;
        display: table-cell;
        font-weight: bold;
        text-align: -internal-center;
        ::after {
          content: '';
          position: absolute;
          top: 10px;
          right: 0;
          display: inline-block;
          width: 1px;
          height: 15px;
          background-color: #ccc;
        }
        :last-child::after {
          display: none;
        }
      }
    }
  }
  tbody {
    display: table-row-group;
    tr {
      box-sizing: border-box;
      td {
        display: table-cell;
        line-height: 45px;
        input {
          vertical-align: middle;
          margin: 0px 3px 0px 5px;
        }
        img {
          height: 27px;
          vertical-align: middle;
        }
      }
    }
    .active {
      border: 1px solid #07f;
    }
    .left {
      text-align: left;
    }
  }
`;

export default TrackTotal;
