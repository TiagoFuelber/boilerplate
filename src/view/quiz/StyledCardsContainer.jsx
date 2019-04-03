import Styled from 'styled-components';
import { Breakpoints } from '../ui/styles/constants';

const StyledCardsContainer = Styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: ${Breakpoints.mobile}) {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(5, 1fr);
    grid-gap: 10px;
  }
`;

export default StyledCardsContainer;
