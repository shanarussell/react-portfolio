import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "project1 project2"
    "project3 project4";
  min-height: 10em;
  padding: 30px;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

export const Project1Wrapper = styled.div`
  grid-area: project1;
`;

export const Project = styled.div`
  //   height: 17rem;
  height: 100%;
`;

export const ProjectImages = styled.div`
  width: 100%;
`;

export const ProjectCaptionText = styled.div`
  text-align: left;
`;

export const GitHubLink = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export const PortfolioLogo = styled.img`
  height: 35px;
`;

export const Project2Wrapper = styled.div`
  grid-area: project2;
`;

export const Project3Wrapper = styled.div`
  grid-area: project3;
`;

export const Project4Wrapper = styled.div`
  grid-area: project4;
`;

export const PortfolioHeadlines = styled.h4`
  color: ${({ theme }) => theme.colors.headerText};
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  margin: 10px 0 10px 0;
  font-size: 24px;
`;

export const PortfolioParagraphs = styled.p`
  color: ${({ theme }) => theme.colors.paragraphText};
  font-family: "Roboto Mono", monospace;
`;
