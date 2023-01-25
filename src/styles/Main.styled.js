import styled from "styled-components";

export const WindowWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px 5px 0 0;
  margin: 0 50px 50px 50px;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas:
    "toolbar toolbar"
    "left-column right-column";

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0;
    padding: 0;
    grid-template-areas:
      "toolbar"
      "left-column"
      "right-column";
  }
`;

export const ToolbarWrapper = styled.div`
  border-radius: 5px 5px 0 0;
  height: 3.5em;
  grid-area: toolbar;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navBarColor};
`;

export const DotsWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export const Dot1 = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 5px;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  background-color: #fc6058;
`;

export const Dot2 = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 5px;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  background-color: #fec02f;
`;

export const Dot3 = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 5px;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  background-color: #2aca3e;
`;

export const ToolbarText = styled.div`
  margin: 0;
  padding: 10px;
`;

export const ToolbarUL = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const ToolbarLI = styled.li`
  color: ${({ theme }) => theme.colors.paragraphText};
  font-family: "Roboto Mono", monospace;
`;

export const RightWrapper = styled.div`
         grid-area: right-column;
         align-content: center;
         width: 100%;
         padding: 20px 20px 50px 20px;
         background-color: ${({ theme }) => theme.colors.rightWindowColor};
         height: 100%;
         @media (max-width: 414px) {
           padding: 0;
         }
       `;

export const RightSideParagraph = styled.p`
  color: ${({ theme }) => theme.colors.paragraphText};
  font-family: "Roboto Mono", monospace;
`;

export const RightSideHeader4 = styled.h4`
  color: ${({ theme }) => theme.colors.headerText};
  margin-bottom: 20px;
  margin-top: 10px;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
`;
