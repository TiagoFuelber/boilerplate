import { createGlobalStyle } from 'styled-components';
import { Yellow } from './constants';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Pathway Gothic One', sans-serif;
    letter-spacing: 1px;
    font-size: 120%;

    p {
      color: white;
    }
  }

  .center {
    text-align: center;
  }

  .yellow {
    color: ${Yellow};
  }

  .upper {
    text-transform: uppercase;
  }

  .bold {
    font-weight: 800;
  }
`;

export default GlobalStyle;
