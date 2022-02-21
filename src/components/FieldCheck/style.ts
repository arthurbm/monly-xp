import styled from 'styled-components';
import theme from 'styles/theme';
import { styled as muiStyled } from '@mui/material/styles';

interface ContainerProps {
  height?: string;
}

interface InfoProps {
  usesEmoji?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: ${(props) => props.height || '60px'};
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${theme.main.colors.white};
`;

export const Info = styled.div<InfoProps>`
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: ${(props) => (props.usesEmoji ? 'row' : 'column')};

  & p {
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
