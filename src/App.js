import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyles } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { light, blue, green, purple } from "./styles/Theme.styled";
import React, { useState } from "react";
import {PageWrapper} from './styles/App.styled'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };
  return (
    <PageWrapper>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <Header handleThemeChange={handleThemeChange} />
        <Main />
      </ThemeProvider>
    </PageWrapper>
  );
}

export default App;
