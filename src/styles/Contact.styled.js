import styled from "styled-components";

export const ContactHeadlines = styled.h4`
  color: ${({ theme }) => theme.colors.headerText};
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  margin: 10px 0 10px 0;
  font-size: 24px;
`;

export const ContactParagraphs = styled.p`
  color: ${({ theme }) => theme.colors.paragraphText};
  font-family: "Roboto Mono", monospace;
`;
