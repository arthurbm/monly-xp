import styled from 'styled-components';

export const WhiteBackgorund = styled.div`
  background-color: ${({ theme }) => theme.main.colors.white};
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
  border-radius: 4px;
  margin-top: 8px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
