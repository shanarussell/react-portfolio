import {
  RightSideHeadlines,
  RightSideWrapper,
  AboutWrapper,
  FileGridWrapper,
  PhotoFileWrapper,
  FileContent,
  ParagraphText,
  FileImage,
  FileName,
  FileBorder,
  FileAndNameWrapper,
  ImageStyle,
} from "../styles/Home.styled";
import profilePic from "../images/my-profile-pic.png";
import React from "react";


export default function Home() {
  return (
    <RightSideWrapper>
      <RightSideHeadlines>About Me</RightSideHeadlines>
      <AboutWrapper>
        <FileGridWrapper>
          <PhotoFileWrapper>
            <FileBorder>
              <FileContent>
                <FileImage>
                  <ImageStyle
                    src={profilePic}
                    width={"100%"}
                    alt="Profile Pic"
                  />
                </FileImage>
              </FileContent>
            </FileBorder>

            <FileName>
              <ParagraphText>shana.jpg</ParagraphText>
            </FileName>
          </PhotoFileWrapper>

          <FileAndNameWrapper>
            <FileBorder>
              <FileContent>
                <ParagraphText>
                  My name is Shana Russell and I am a software developer based
                  out of Houston, Texas, seeking a full time remote role in
                  front-end development.
                </ParagraphText>
                <ParagraphText>
                  I have an Associates Degree in Graphic Design and I am
                  currently a member of Merit America's Java Development
                  program. This is a 30-week intensive program is focused on
                  Full Stack Web Application Development, including hands-on
                  coursework in Java Development, Client-Server Programming (SQL
                  + Spring), and Frontend Development (Classic Web + React). I
                  will complete this program in September 2022.
                </ParagraphText>
                <ParagraphText>
                  I love to create. I am the type of person who is always
                  working on some kind of project. In my free time, I enjoy
                  hobbies such as woodworking and creating punny stickers that I
                  sell in digital and physical form. I have over 20 years of
                  experience working on personal web projects and 6 years of
                  experience creating personal iOS projects.
                </ParagraphText>
              </FileContent>
            </FileBorder>

            <FileName>
              <ParagraphText>about-me.txt</ParagraphText>
            </FileName>
          </FileAndNameWrapper>
        </FileGridWrapper>
      </AboutWrapper>
    </RightSideWrapper>
  );
}
