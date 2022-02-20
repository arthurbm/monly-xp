import styled from 'styled-components';
import theme from 'styles/theme';
import { styled as muiStyled } from '@mui/material/styles';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
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

export const UncheckedIcon = muiStyled('span')(() => ({
  width: 32,
  height: 32,
  border: '2px solid #C2C3CA',
  borderRadius: 41,
  backgroundColor: theme.main.colors.white
}));

export const CheckedIcon = muiStyled(UncheckedIcon)({
  // backgroundColor: theme.main.colors.primary
  border: `8px solid ${theme.main.colors.primary}`
});

export const ComingSoon = styled.div`
  background-color: ${theme.main.colors.gray01_bg};
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${theme.main.colors.gray03};
  }
`;
