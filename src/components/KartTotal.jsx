import React from 'react';
// import styled from 'styled-components';
import { TableTitle } from './TrackTotal';
import { TopTable } from './TrackTotal';
import { DataTitle } from './TrackTotal';
import { GraphBox } from './TrackTotal';
import { BottomTable } from './TrackTotal';
import { TableBox } from './TrackTotal';

const KartTotal = () => {
  const kartImg =
    'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/d330a211c3b0e13e440465cd847a8825901160dcd86def1cf81863bb6d85d15d.png?v=1648090362';
  return (
    <>
      <TableTitle>
        <span>카트&nbsp;&nbsp;</span>전적
      </TableTitle>
      <TopTable>
        <DataTitle>
          <span className="badge">일반</span>폭스 V1
        </DataTitle>
        <GraphBox>여기에 카트가 들어감</GraphBox>
      </TopTable>
      <BottomTable>
        <TableBox>
          <thread>
            <tr>
              <th>선택</th>
              <th>카트</th>
              <th>횟수</th>
              <th>승률</th>
              <th>리타율</th>
            </tr>
          </thread>
          <tbody>
            <tr className="active">
              <td>
                <input type="radio" />
              </td>
              <td className="left">
                <a href="#">
                  <img src={kartImg} />
                  &nbsp;폭스 V1
                </a>
              </td>
              <td>161</td>
              <td>39%</td>
              <td>1%</td>
            </tr>
          </tbody>
        </TableBox>
      </BottomTable>
    </>
  );
};

export default KartTotal;
