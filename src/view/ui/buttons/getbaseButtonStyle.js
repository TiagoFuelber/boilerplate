import { Black, Yellow } from '../styles/constants';

const getBaseButtonStyle = (width = 'auto') => {
  return `
    color: ${Black};
    background-color: ${Yellow};
    border: none;
    padding: 20px;
    font-weight: 800;
    font-size: 30px;
    width: ${width};
    transition: transform 0.5s;

    :hover {
      cursor: pointer;
      transform: scale(0.98);
    }
  `;
};

export default getBaseButtonStyle;
