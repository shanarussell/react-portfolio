import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "logikcull-pic-1 logikcull-pic-2"
    "logikcull-title logikcull-title"
    "logikcull-par-1 logikcull-par-2"
    "projectCoverLetter projectRecipeGenerator"
    "project1 project2"
    "project3 project4"
    "project5 project6";
  min-height: 10em;
  padding: 30px;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "logikcull-pic-1"
      "logikcull-pic-2"
      "logikcull-title"
      "logikcull-par-1"
      "logikcull-par-2"
      "projectCoverLetter"
      "projectRecipeGenerator"
      "project1"
      "project2"
      "project3"
      "project4"
      "project5"
      "project6";
  }
`;

export const LogikcullPic1 = styled.div`
  grid-area: logikcull-pic-1;
`;
export const LogikcullPic2 = styled.div`
  grid-area: logikcull-pic-2;
`;
export const LogikcullTitle = styled.div`
  grid-area: logikcull-title;
  width: 100%;
`;
export const LogikcullPar1 = styled.div`
  grid-area: logikcull-par-1;
`;

export const LogikcullPar2 = styled.div`
  grid-area: logikcull-par-2;
`;

export const ProjectCoverLetterWrapper = styled.div`
  grid-area: projectCoverLetter;
`;

export const ProjectRecipeWrapper = styled.div`
  grid-area: projectRecipeGenerator;
`;

export const Project1Wrapper = styled.div`
  grid-area: project1;
`;

export const Project = styled.div`
  height: 100%;
`;

export const ProjectImages = styled.img`
  width: 100%;
`;

export const ProjectCaptionText = styled.div`
  text-align: left;
`;

export const GitHubLink = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.paragraphText};
  font-family: "Roboto Mono", monospace;
`;

export const PortfolioLogo = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 10px;
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

export const Project5Wrapper = styled.div`
  grid-area: project5;
`;
export const Project6Wrapper = styled.div`
  grid-area: project6;
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
