import {
  DotsWrapper,
  ToolbarWrapper,
  WindowWrapper,
  Dot1,
  Dot2,
  Dot3,
  ToolbarText,
  RightWrapper,
  ToolbarUL,
  ToolbarLI,
  RightSideParagraph,
  RightSideHeader4,
  ul,
  li,
} from "../styles/Main.styled";
import Navigation from "./Navigation";
import Home from "./Home";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import React from "react";


export default function Main() {
  return (
    <WindowWrapper>
      <ToolbarWrapper>
        <DotsWrapper>
          <Dot1 />

          <Dot2 />

          <Dot3 />
        </DotsWrapper>

        <ToolbarUL>
          <ToolbarText>
            <ToolbarLI>{/* My Resume */}</ToolbarLI>
          </ToolbarText>
        </ToolbarUL>
      </ToolbarWrapper>
      <Navigation />
      <RightWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </RightWrapper>
    </WindowWrapper>
  );
}
