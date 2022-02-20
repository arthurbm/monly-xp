import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.main.colors.grayBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 95%;
  height: 55%;
  margin: 80px 0;
  max-width: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
