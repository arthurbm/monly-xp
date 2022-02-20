import styled from 'styled-components';
import theme from '../styles/theme';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.main.colors.gray01_bg};
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

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 13%;
  min-height: 100px;
  justify-content: space-between;

  @media screen and (max-width: 300px) {
    p {
      font-size: 15px !important;
    }
    min-height: 90px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin-top: 80px;
  height: 100px;

  @media screen and (max-width: 350px) {
    width: 30%;
  }
`;

export const WhiteCircle = styled.div`
  z-index: 1;

  position: fixed;
  bottom: 0;
  background-color: ${theme.main.colors.white};
  border-radius: 48%;
  width: 900px;
  height: 400px;
  margin-bottom: -140px;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
