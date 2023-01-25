import {
  NavigationWrapper,
  NavigationLinksWrapper,
  NavigationLinks,
  NavigationUL,
} from "../styles/Navigation.styled";
import { Outlet, Link } from "react-router-dom";
import React from "react";


export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationLinksWrapper>
        <NavigationUL>
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
        </NavigationUL>
      </NavigationLinksWrapper>
      <Outlet />
    </NavigationWrapper>
  );
}
