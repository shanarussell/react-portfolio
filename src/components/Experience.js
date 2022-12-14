import {
  RightSideWrapper,
  SkillsWrapper,
  MonitorOuterWrapper,
  MonitorInnerWrapper,
  MonitorBottomWrapper,
  MonitorBrandRapper,
  MonitorButtonWrapper,
  MonitorSmallButtons,
  MonitorPowerButton,
  MonitorStand,
  RightSideHeadlines,
  Type,
  SkillsHeadline,
  ExperienceWrapper,
  JobWrapper,
  SkillsList,
  ExperienceH4,
  ExperienceH5,
  ExperienceH6,
  SkillsListLI,
  ExperienceDates,
} from "../styles/Experience.styled";
import { TypeAnimation } from "react-type-animation";
import React from "react";

export default function Experience() {
  return (
    <RightSideWrapper>
      <MonitorOuterWrapper>
        <MonitorInnerWrapper>
          <SkillsWrapper>
            <SkillsHeadline>Skills:</SkillsHeadline>
            <Type>
              <TypeAnimation
                sequence={[
                  "React, JavaScript, TypeScript, Git, MUI, HTML / CSS, Java, SQL, Adobe CC", // Types 'One'
                  1000, // Waits 1s
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </Type>
          </SkillsWrapper>

          <MonitorBottomWrapper>
            <MonitorBrandRapper>
              <h5></h5>
            </MonitorBrandRapper>

            <MonitorButtonWrapper>
              <MonitorSmallButtons>&#x25B4;</MonitorSmallButtons>
              <MonitorSmallButtons>&#x25BE;</MonitorSmallButtons>
              <MonitorPowerButton>&#9211;</MonitorPowerButton>
            </MonitorButtonWrapper>
          </MonitorBottomWrapper>
        </MonitorInnerWrapper>

        <MonitorStand></MonitorStand>
      </MonitorOuterWrapper>

      <ExperienceWrapper>
        <ExperienceH4>Work Experience</ExperienceH4>
        <JobWrapper>
          <ExperienceH5>Frontend Engineering Intern</ExperienceH5>
          <ExperienceH6>Logikcull</ExperienceH6>
          <ExperienceDates>10/2022 - 12/2022</ExperienceDates>
          <SkillsList>
            <SkillsListLI>
              Researched the codebase, collaborated with senior developers on
              solutions, implemented code solutions in React, Javascript, and
              Typescript, wrote and merged pull requests, participated in code
              reviews, implemented feedback, and shipped code to production.
            </SkillsListLI>
            <SkillsListLI>
              Branched, committed, merged, and pushed code using Git{" "}
            </SkillsListLI>
            <SkillsListLI>
              Utilized Visual Studio Code to develop code in React, Javascript,
              and Typescript
            </SkillsListLI>
            <SkillsListLI>
              Worked in an agile environment, participated in agile planning
              meetings, and contributed to the overall team goals of the team
            </SkillsListLI>
            <SkillsListLI>
              Communicated with other teams as necessary to find solutions to
              questions outside of my team's scope
            </SkillsListLI>
            <SkillsListLI>
              Worked remotely from my home office, utilizing company's Slack
              channels and email for communication. Participated in meetings
              using Zoom, Google Meet, and code collaboration with Pop.
            </SkillsListLI>
            <SkillsListLI>
              Presented virtually to groups on 4 different occasions on topics
              such as time management, effective presentations, and TypeScript.
              Delivered my final internship presentation at a company all-hands
              meeting.
            </SkillsListLI>
            <SkillsListLI>
              Achieved Culler Level 1 certification:{" "}
              <a
                href="https://verify.skilljar.com/c/5jt5wo9yspis"
                target="_blank"
              >
                Click here to view certification
              </a>
            </SkillsListLI>
          </SkillsList>
        </JobWrapper>
        <JobWrapper>
          <ExperienceH5>Educational Technology Administrator</ExperienceH5>
          <ExperienceH6>LEAH Schools, Houston, TX</ExperienceH6>
          <ExperienceDates>06/2013 - 10/2022</ExperienceDates>
          <SkillsList>
            <SkillsListLI>
              Developed and administered both in-person and online computer and
              software training for approximately 1500 students and teachers
              throughout the organization
            </SkillsListLI>
            <SkillsListLI>
              Provided in-person and remote technical support at an average of
              140 incidents per month for students, teachers and staff on four
              campuses while consistently achieving the highest number of
              tickets solved per month
            </SkillsListLI>
            <SkillsListLI>
              Facilitated technology purchases and worked with administrators to
              develop new ideas and strategies to optimize the effectiveness of
              the organization&#39;s technology
            </SkillsListLI>
          </SkillsList>
        </JobWrapper>

        <JobWrapper>
          <ExperienceH5>Creative (Trainer)</ExperienceH5>
          <ExperienceH6>Apple, Houston, TX</ExperienceH6>
          <ExperienceDates>08/2007 - 06/2013</ExperienceDates>
          <SkillsList>
            <SkillsListLI>
              Trained customers on Apple hardware and software in one to one
              interactions as well as in group workshops
            </SkillsListLI>
            <SkillsListLI>
              Earned some of the highest possible individual customer
              satisfaction scores. Part of a team who won nationwide Apple
              customer service awards for outstanding training and service
            </SkillsListLI>
            <SkillsListLI>
              Certified on all consumer Apple Software, Apple&#39;s professional
              photo software and Apple small device repair
            </SkillsListLI>
          </SkillsList>
        </JobWrapper>
        <JobWrapper>
          <ExperienceH5>Graphic Designer</ExperienceH5>
          <ExperienceH6>The Pressroom, Webster, TX</ExperienceH6>
          <ExperienceDates>01/1996 - 08/2007</ExperienceDates>
          <SkillsList>
            <SkillsListLI>
              Specialized in print layout using Adobe InDesign, Photoshop and
              Illustrator
            </SkillsListLI>
            <SkillsListLI>
              Created processes that allowed employer to track the progress of
              all active projects online
            </SkillsListLI>
          </SkillsList>
        </JobWrapper>
        <JobWrapper>
          <ExperienceH5>Freelance Graphic Designer</ExperienceH5>
          <ExperienceH6>Self-Employed, Texas City, TX</ExperienceH6>
          <ExperienceDates>01/1996 - Present</ExperienceDates>
        </JobWrapper>
      </ExperienceWrapper>
    </RightSideWrapper>
  );
}
