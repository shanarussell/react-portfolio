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
          <ExperienceH5>Educational Technology Administrator</ExperienceH5>
          <ExperienceH6>LEAH Schools, Houston, TX</ExperienceH6>
          <ExperienceDates>06/2013 - Present</ExperienceDates>
          <SkillsList>
            <SkillsListLI>
              Develop and administer both in-person and online computer and
              software training for approximately 1500 students and teachers
              throughout the organization
            </SkillsListLI>
            <SkillsListLI>
              Provide in-person and remote technical support at an average of
              140 incidents per month for students, teachers and staff on four
              campuses while consistently achieving the highest number of
              tickets solved per month
            </SkillsListLI>
            <SkillsListLI>
              Facilitate technology purchases and work with administrators to
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
