import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



body {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.colors.mainColor};
}
`;
