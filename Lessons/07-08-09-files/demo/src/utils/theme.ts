import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primary: {
      default: "#374df5",
      variant: "#1327ba",
      highlight: "#e1edfe",
    },
  },
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  name: 'dark',
  colors: {
    primary: {
      default: "#849afd",
      variant: "#afbeff",
      highlight: "#2d385c",
    },
  },
};

export enum ThemeName {
  Light = "light",
  Dark = "dark",
}

export const themes = {
  [ThemeName.Light]: lightTheme,
  [ThemeName.Dark]: darkTheme,
}
