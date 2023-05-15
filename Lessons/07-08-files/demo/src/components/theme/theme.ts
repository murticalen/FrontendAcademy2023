import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
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
  colors: {
    primary: {
      default: "#849afd",
      variant: "#afbeff",
      highlight: "#2d385c",
    },
  },
};
