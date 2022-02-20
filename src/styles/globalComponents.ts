import styled from 'styled-components';

interface TextProps {
  size?: string;
  align?: string;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  regular?: boolean;
  primary?: boolean;
  secondary?: boolean;
  dark?: boolean;
  grey?: boolean;
  black?: boolean;
  margin?: string;
  padding?: string;
  width?: string;
  white?: boolean;
  alignSelf?: string;
}

export const CustomText = styled.p<TextProps>`
  text-align: ${(props) => props.align || 'center'};
  font-size: ${(props) => props.size || '15px'};
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  width: ${(props) => props.width || 'auto'};
  font-family: ${(props) =>
    ({ theme }) =>
      (props.bold && theme.main.fonts.bold) ||
      (props.semiBold && theme.main.fonts.semi_bold) ||
      (props.medium && theme.main.fonts.medium) ||
      (props.regular && theme.main.fonts.regular) ||
      theme.main.fonts.regular};
  color: ${(props) =>
    ({ theme }) =>
      (props.primary && theme.main.colors.primary) ||
      (props.secondary && theme.main.colors.secondary) ||
      (props.dark && theme.main.colors.dark) ||
      (props.grey && theme.main.colors.gray05) ||
      (props.black && theme.main.colors.black) ||
      (props.white && theme.main.colors.white) ||
      theme.main.colors.primary};
  align-self: ${(props) => props.alignSelf || 'auto'};
`;
