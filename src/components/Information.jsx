import React from 'react';
import styled from 'styled-components';
import InfoLeft from './InfoLeft';
import InfoRight from './InfoRight';

const Information = () => {
  return (
    <InfoWrapper>
      <InfoLeftBox>
        <InfoLeft />
      </InfoLeftBox>
      <InfoRightBox>
        <InfoRight />
      </InfoRightBox>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  /* background-color: gray; */
  height: 600px;
`;

const InfoLeftBox = styled.div`
  flex: 1;
  margin-right: 10px;
  /* background-color: pink; */
`;

const InfoRightBox = styled.div`
  flex: 2;
  padding-top: 40px;
  /* background-color: lightblue; */
`;
export default Information;
