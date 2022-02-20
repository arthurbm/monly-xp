import styled from 'styled-components';
import Button from '@mui/material/Button';
import theme from 'styles/theme';

interface ButtonProps {
  height?: string;
  width?: string;
  letterSpacing?: string;
  textTransfrom?: string;
  borderRadius?: string;
  padding?: string;
  font?: string;
  fontWeight?: string;
  margin?: string;
  textColor?: string;
  alignSelf?: string;
}

const ButtonCustom = styled(Button)<ButtonProps>`
  height: ${(props) => props.height || '45px'};
  width: ${(props) => props.width || '325px'};
  letter-spacing: ${(props) => props.letterSpacing || '1.25px'};
  text-transform: ${(props) => props.textTransfrom || 'none'};
  border-radius: ${(props) => props.borderRadius || '51px'};
  font-size: ${(props) => props.font || '12px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  margin: ${(props) => props.margin || '0'};
  color: ${(props) =>
    props.textColor || (({ theme }) => theme.main.colors.dark)};
  align-self: ${(props) => props.alignSelf || 'auto'};
  font: ${theme.main.fonts.semi_bold};
  font-size: 14px;
`;

export const TextButton = styled(ButtonCustom)`
  padding: 0px 5px 0px 5px;
  color: ${({ theme }) => theme.main.colors.primary};
`;

export const BlueButton = styled(ButtonCustom)`
  background-color: ${({ theme }) => theme.main.colors.primary};
  color: ${({ theme }) => theme.main.colors.white};
  box-shadow: 0 4px 2px -2px #707070;
  &:hover {
    background-color: ${({ theme }) => theme.main.colors.primary};
  }
`;
