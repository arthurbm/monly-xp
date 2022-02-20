import styled from 'styled-components';

export const CircularProgressPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonDate = styled.button`
  background-color: ${(props) => props.theme.main.colors.primary};
  color: ${(props) => props.theme.main.colors.white};
  border-radius: 8px;
  font-size: 14px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
