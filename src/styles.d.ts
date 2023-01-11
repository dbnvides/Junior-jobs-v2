import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      white: string;
      primary: string;
      primary2: string;
      primary3: string;
      secondary: string;
      secondary2: string;
      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
      grey5: string;
      negative: string;
      warning: string;
      sucess: string;
      information: string;
    };
  }
}
