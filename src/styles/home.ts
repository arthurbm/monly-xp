import styled from 'styled-components';

export const BlueBackground = styled.div`
  background-color: ${({ theme }) => theme.main.colors.primary};
  height: 27%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-evenly;
  width: 90%;
  height: 100%;
`;

export const ContainerGray = styled(Container)`
  justify-content: start;
`;

export const TextImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GrayBackground = styled.div`
  background-color: ${({ theme }) => theme.main.colors.gray02};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WhiteBackground = styled.div`
  background-color: ${({ theme }) => theme.main.colors.white};
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 16px;
`;

export const BlueBox = styled.div`
  background-color: ${({ theme }) => theme.main.colors.secondary};
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 8px;
  border-radius: 4px;
`;
