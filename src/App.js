import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { light, blue, green, purple } from "./components/styles/Theme.styled";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };
  return (
    <>
      

      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <Header handleThemeChange={handleThemeChange} />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
