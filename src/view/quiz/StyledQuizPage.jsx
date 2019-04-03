import Styled from 'styled-components';
import StyledBasePage from '../ui/styles/StyledBasePage';

const StyledQuizPage = Styled(StyledBasePage)`
  .header {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 700px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default StyledQuizPage;
