import styled from "styled-components";

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  min-height: 10em;
  padding: 30px;
  align-items: center;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "greeting-area color-theme-area";
`;

export const HelloWorld = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.mainText};
  grid-area: greeting-area;
  font-size: 50px;
  display: block;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
`;

export const ColorThemeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: color-theme-area;
`;

export const ColorThemeHeader = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 2;
  color: ${({ theme }) => theme.colors.mainText};
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  margin: 0px 0 10px 0;
  display: block;
`;

export const ColorCirclesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ThemeDotLight = styled.div`
  background-color: #fff;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 5px;
  border: 2px solid ${({ theme }) => theme.colors.themeDotBorder};
  box-shadow: -1px 1px 3px -1px rgb(0 0 0 / 75%);
  cursor: pointer;
  display: block;
`;

export const ThemeDotBlue = styled.div`
  background-color: #192734;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 5px;
  border: 2px solid ${({ theme }) => theme.colors.themeDotBorder};
  box-shadow: -1px 1px 3px -1px rgb(0 0 0 / 75%);
  cursor: pointer;
  display: block;
`;

export const ThemeDotGreen = styled.div`
  background-color: #9cf965;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 5px;
  border: 2px solid ${({ theme }) => theme.colors.themeDotBorder};
  box-shadow: -1px 1px 3px -1px rgb(0 0 0 / 75%);
  cursor: pointer;
  display: block;
`;

export const ThemeDotPurple = styled.div`
  background-color: #7e4c74;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 5px;
  border: 2px solid ${({ theme }) => theme.colors.themeDotBorder};
  box-shadow: -1px 1px 3px -1px rgb(0 0 0 / 75%);
  cursor: pointer;
  display: block;
`;

export const ThemeSettingsNote = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mainText};
  font-style: italic;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
