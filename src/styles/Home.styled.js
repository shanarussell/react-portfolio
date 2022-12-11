import styled from "styled-components";

export const RightSideWrapper = styled.div`
  align-content: center;
  padding: 20px 20px 50px 20px;
  height: 100%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.rightWindowColor};
`;

export const RightSideHeadlines = styled.h3`
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  margin: 0px 0 10px 0;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.headerText};
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 30px;
  border-radius: 15px;
`;

export const FileGridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 35px;
  grid-template-areas: "file1" "file2";
`;

export const PhotoFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: file1;
  border-radius: 15px;
  width: 50%;
`;

export const FileBorder = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
  background-color: rgb(241, 242, 243);
`;

export const FileContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 10px 10px;
  background-color: rgb(241, 242, 243);
  height: 100%;
`;

export const FileImage = styled.div`
  width: 100%;
  border-radius: 15px;
`;

export const ImageStyle = styled.img`
  border-radius: 15px;
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
  padding: 10px 10px;
  position: relative;
  color: #999;
  background: rgb(230, 223, 223);
  grid-area: file2;
`;
