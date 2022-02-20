import styled from 'styled-components';
import theme from 'styles/theme';

const Input = styled.input`
  width: 100%;
  height: 50px;
  font: ${theme.main.fonts.regular};
  border: none;

  padding: 0 10px;

  &:focus {
    outline: none;
    font: ${theme.main.fonts.regular};
  }
`;

export default Input;
