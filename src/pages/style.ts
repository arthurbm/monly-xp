import styled from 'styled-components';
import theme from '../styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.main.colors.grayBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 95%;
  height: 100%;
  margin: 80px 0;
  max-width: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 13%;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 15%;
  justify-content: space-between;
`;

export const WhiteCircle = styled.div`
  background-color: ${theme.main.colors.white};
  border-top-left-radius: 115px;
  border-top-right-radius: 115px;
  width: 130%;
  height: 25px;
  display: flex;
  align-items: center;
  padding: 45px 0 65px 0;
`;
