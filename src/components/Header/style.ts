import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 0;
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  p {
    text-align: left;
    margin: 5px 0;
  }
`;
export const Arrow = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
