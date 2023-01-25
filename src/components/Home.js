import {
  RightSideHeadlines,
  RightSideWrapper,
  AboutWrapper,
  FileGridWrapper,
  FileContent,
  ParagraphText,
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
          <FileAndNameWrapper>
            <FileBorder>
              <FileContent>
                <ImageStyle src={profilePic} alt="Profile Pic" />

                <ParagraphText>
                  My name is Shana Russell and I am a software developer based
                  out of Houston, Texas, seeking a full time remote role in
                  front-end development.
                </ParagraphText>
                <ParagraphText>
                  I have an Associates Degree in Graphic Design and I am a
                  graduate of Merit America's Java Development program. This
                  program was a 30-week intensive program focused on Full Stack
                  Web Application Development, including hands-on coursework in
                  Java Development, Client-Server Programming (SQL + Spring),
                  and Frontend Development (Classic Web + React).
                </ParagraphText>
                <ParagraphText>
                  I recently completed a 3 month internship with Logikcull where
                  I was a Frontend Engineering Intern. In this role, I had the
                  opportunity to work on several projects involving React,
                  Typescript, MUI and refactoring code originally built in
                  Backbone.js.
                </ParagraphText>
                <ParagraphText>
                  I love to create. I am the type of person who is always
                  working on some kind of project. In my free time, I enjoy
                  hobbies such as woodworking and creating punny stickers that I
                  sell in digital and physical form. I have over 20 years of
                  experience working on personal web projects and 6 years of
                  experience creating personal iOS projects.
                </ParagraphText>
                <ParagraphText>
                  You can{" "}
                  <a href="https://docs.google.com/document/d/13kqhDDGmNh8R6TgNEH9XJInLNuKH9Kp3JiB30Kp_EIo/edit?usp=sharing">
                    view or download my resume here.
                  </a>
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
