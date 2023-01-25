import {
  ColorCirclesWrapper,
  ColorThemeHeader,
  ColorThemeWrapper,
  HeaderWrapper,
  HelloWorld,
  ThemeDotBlue,
  ThemeDotGreen,
  ThemeDotLight,
  ThemeDotPurple,
  ThemeSettingsNote,
} from "../styles/Header.styled";
import { light, blue, green, purple } from "../styles/Theme.styled";
import React from "react";

export default function Header({ handleThemeChange }) {
  return (
    <HeaderWrapper>
      <HelloWorld>
        &lt;HelloWorld &#47; &gt; <br />
        whoAmI = &quot;Shana Russell&quot;
      </HelloWorld>

      <ColorThemeWrapper>
        <ColorThemeHeader>Choose a Color Theme</ColorThemeHeader>

        <ColorCirclesWrapper>
          <ThemeDotLight
            onClick={() => handleThemeChange(light)}
          ></ThemeDotLight>
          <ThemeDotBlue onClick={() => handleThemeChange(blue)}></ThemeDotBlue>
          <ThemeDotGreen
            onClick={() => handleThemeChange(green)}
          ></ThemeDotGreen>
          <ThemeDotPurple
            onClick={() => handleThemeChange(purple)}
          ></ThemeDotPurple>
        </ColorCirclesWrapper>
        <ThemeSettingsNote>
          *Theme settings will be saved for your next visit
        </ThemeSettingsNote>
      </ColorThemeWrapper>
    </HeaderWrapper>
  );
}
