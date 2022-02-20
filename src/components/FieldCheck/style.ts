import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.main.colors.white};
`;

export const Info = styled.div`
  width: 80%;
  display: flex;
  align-items: center;

  p {
    margin-right: 10px;
  }
`;
