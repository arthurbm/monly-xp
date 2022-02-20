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

export const ChosenOptions = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${theme.main.colors.white};
  margin-bottom: 2px;
`;

export const AportSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 16px 0;

  p {
    text-align: left;
    margin-bottom: 5px;
  }
`;

export const HowMuchOfBalance = styled.div`
  height: 265px;
  padding: 0 10px 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${theme.main.colors.white};
  margin-top: 2px;
`;

export const InformationRow = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 10px 0 10px;
  justify-content: space-between;
`;

export const Balance = styled.div`
  width: 100%;
  height: 50px;
`;
