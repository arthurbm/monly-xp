import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    main: {
      fonts: {
        bold: string;
        medium: string;
        semi_bold: string;
        regular: string;
      };
      colors: {
        primary: string;
        secondary: string;
        white: string;
        gray01_bg: string;
        gray02: string;
        gray03: string;
        gray04: string;
        gray05: string;
        black: string;
      };
    };
  }
}
