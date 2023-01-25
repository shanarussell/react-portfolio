import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 30px 0px 0px 0px;
  margin: 20px 50px 10px 50px;
  gap: 40px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "greeting-area color-theme-area";

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "greeting-area"
      "color-theme-area";
  }

  @media (max-width: 390px) {
    padding: 20px 0 0 0;
    margin: 20px;
  }

  @media (max-width: 414px) {
    padding: 10px 0 0 0;
    margin: 20px;
  }
`;

export const HelloWorld = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.mainText};
  grid-area: greeting-area;
  font-size: 40px;
  display: flex;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  @media (max-width: 800px) {
    justify-content: center;
  }
  @media (max-width: 1143px) {
    font-size: 30px;
  }
  @media (max-width: 907px) {
    font-size: 20px;
  }
`;

export const ColorThemeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: color-theme-area;
`;

export const ColorThemeHeader = styled.div`
  font-size: 20px;
  text-align: center;

  color: ${({ theme }) => theme.colors.mainText};
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  margin: 0px 0 10px 0;
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

  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
