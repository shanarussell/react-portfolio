import styled from "styled-components";

export const NavigationWrapper = styled.div`
  grid-area: left-column;
  padding-bottom: 71px;
  border-right: 1px solid gray;
  line-height: 3;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.sidebarColor};
`;

export const NavigationLinksWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const NavigationLinks = styled.li`
  list-style: none;
  text-decoration: none;
  font-family: "Roboto Mono", monospace;
  color: ${({ theme }) => theme.colors.navigationColor};
  background-image: linear-gradient(${({ theme }) =>
    theme.colors.gradient1}, ${({ theme }) => theme.colors.gradient2});
  background-size: 0 80%;
  background-repeat: no-repeat;
  transition: 0.4s;
  padding-bottom: 10px;
  padding-left: 10px;
  &:hover {
    background-size: 100% 80%;
`;
