import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.main.colors.gray01_bg};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  .MuiCircularProgress-root {
    color: ${theme.main.colors.primary};
  }
`;
