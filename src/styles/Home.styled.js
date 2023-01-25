import styled from "styled-components";

export const RightSideWrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.rightWindowColor};
  
`;

export const RightSideHeadlines = styled.h3`
  font-family: "Russo One", sans-serif;
  font-weight: 500;

  font-size: 28px;
  color: ${({ theme }) => theme.colors.headerText};
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const AboutWrapper = styled.div`
  margin-top: 30px;
  border-radius: 15px;
`;

export const FileGridWrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FileBorder = styled.div`
         justify-content: center;
         align-items: center;
         border-radius: 15px;
         width: 100%;
         padding: 20px;
         margin-bottom: 20px;
         background-color: rgb(241, 242, 243);
         @media (max-width: 414px) {
           padding: 15px;
         }
       `;

export const FileContent = styled.div`
  border-radius: 15px;
  background-color: rgb(241, 242, 243);
  height: 100%;
`;

export const ImageStyle = styled.img`
  border-radius: 15px;
  margin-right: 20px;
  float: left;
  width: 200px;
  @media (max-width: 620px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const FileName = styled.div`
  text-align: center;
  margin: 0 0;
`;

export const ParagraphText = styled.p`
  color: ${({ theme }) => theme.colors.paragraphText};
  font-family: "Roboto Mono", monospace;
  margin-bottom: 15px;
`;

export const FileAndNameWrapper = styled.div`
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  background-color: lightgray;
  padding: 20px 20px 0 20px;
  position: relative;
  color: #999;
  background: rgb(230, 223, 223);
  @media (max-width: 414px) {
    padding: 0px;
  }
`;
