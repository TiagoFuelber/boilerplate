import React from 'react';
import Styled from 'styled-components';
import { Yellow } from '../styles/constants';

const TimerBarContainer = Styled.div`
  border: 2px solid ${Yellow};
  padding: 5px;
  margin-top: 5px;
`;

const TimerBarRemaining = Styled.div`
  height: 15px;
  width: ${({ percentage }) => percentage}%;
  background: ${Yellow};
`;

export const TimerContainer = Styled.div`
  width: 100%;

  @media screen and (min-width: 700px) {
    width: 150px;
  }
`;

const TimerBar = ({ percentage }) => (
  <TimerBarContainer>
    <TimerBarRemaining percentage={percentage} />
  </TimerBarContainer>
);

export default TimerBar;
