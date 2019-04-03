import Styled from 'styled-components';
import { LightBlack } from '../styles/constants';

const StyledPersonCard = Styled.div`
  padding: 10px;
  background: ${LightBlack};

  .buttons {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;

export default StyledPersonCard;
