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
} from "./styles/Header.styled";
import { light, blue, green, purple } from "./styles/Theme.styled";

export default function Header({ handleThemeChange }) {
  console.log(handleThemeChange);
  return (
    <HeaderWrapper>
      <HelloWorld>
        &lt;&quot;Hello, World&quot;&gt; <br />I am Shana Russell
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
