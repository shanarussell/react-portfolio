import {
  DotsWrapper,
  ToolbarWrapper,
  WindowWrapper,
  Dot1,
  Dot2,
  Dot3,
  ToolbarText,
  NavigationWrapper,
  NavigationLinksWrapper,
  NavigationLinks,
  ul,
  li,
} from "../styles/Navigation.styled";
import { Outlet, Link } from "react-router-dom";
import React from "react";


export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationLinksWrapper>
        <ul>
          <Link style={{ textDecoration: "none" }} to="/">
            <NavigationLinks>Home</NavigationLinks>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/experience">
            <NavigationLinks>Experience</NavigationLinks>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/portfolio">
            <NavigationLinks>Portfolio</NavigationLinks>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/contact">
            <NavigationLinks>Contact</NavigationLinks>
          </Link>
        </ul>
      </NavigationLinksWrapper>
      <Outlet />
    </NavigationWrapper>
  );
}
