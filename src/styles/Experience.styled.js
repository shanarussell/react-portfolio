import styled from "styled-components";

export const RightSideWrapper = styled.div`
  align-content: center;
  padding: 20px 20px 50px 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.rightWindowColor};
  justify-content: center;
  align-items: center;
  @media (max-width: 414) {
    padding: 0px;
  }
`;

export const MonitorOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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

export const SkillsHeadline = styled.h3`
         font-family: "Russo One", sans-serif;
         font-weight: 500;
         margin: 0px 0 10px 0;
         font-size: 28px;
         color: ${({ theme }) => theme.colors.mainText};
         margin-bottom: 20px;
         margin-top: 10px;
         
       `;

export const MonitorInnerWrapper = styled.div`
         border: 1px black solid;
         padding-right: 20px;
         padding-left: 20px;
         border-radius: 15px;
         background-color: ${({ theme }) => theme.colors.navBarColor};

         width: 500px;

         @media (max-width: 593px) {
           width: 100%;
         }
         @media (max-width: 414) {
           padding: 0 10px;
         }

        
       `;

export const MonitorBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MonitorBrandRapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MonitorButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MonitorStand = styled.div`
  width: 20%;
  background-color: ${({ theme }) => theme.colors.navBarColor};
  height: 30px;
  border-style: none solid solid solid;
  border-width: 1px;
`;
export const MonitorSmallButtons = styled.div`
  display: flex;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: silver;
  justify-content: center;
  align-items: center;
  margin: 5px;
  @media (max-width: 593px) {
    width: 10px;
    height: 10px;
  }
`;

export const MonitorPowerButton = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  font-size: 26px;
  @media (max-width: 593px) {
    font-size: 20px;
    width: 20px;
    height: 30px;
    justify-content: center;
    align-content: center;
  }
  @media (max-width: 414) {
    margin-top: 5px;
    margin-right: 10px;
  }
`;

export const SkillsWrapper = styled.div`
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.screenColor};
  font-family: "Roboto Mono", monospace;
`;

export const Type = styled.div`
  font-size: 25px;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  margin: 0px 0 10px 0;
  color: ${({ theme }) => theme.colors.mainText};
  margin-bottom: 10px;
  margin-top: 10px;
  @media (max-width: 593px) {
    font-size: 18px;
  }
`;

export const ExperienceWrapper = styled.div`
         margin-top: 40px;
         background-color: lightgray;
         padding: 20px;
         border-radius: 10px;
         padding: 25px 25px;
         position: relative;
         font-size: 90%;
         text-decoration: none;
         color: #999;
         background: rgb(230, 223, 223);
         transition: all ease 0.5s;
         @media (max-width: 593px) {
           padding: 15px;
         }
         @media (max-width: 414) {
           padding: 0px;
         }
       `;

export const JobWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.sidebarColor};
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
`;

export const SkillsList = styled.ul`
  color: ${({ theme }) => theme.colors.mainText};
  font-family: "Russo One", sans-serif;
  font-weight: 500;

  margin-bottom: 10px;
`;
export const SkillsListLI = styled.li`
         color: ${({ theme }) => theme.colors.headerText};
         font-family: "Roboto Mono", monospace;
         margin-left: 15px;
         margin-bottom: 10px;
       `;

export const ExperienceH4 = styled.h4`
         color: ${({ theme }) => theme.colors.headerText};
         font-family: "Russo One", sans-serif;
         font-weight: 500;
         margin-bottom: 20px;
         margin-top: 10px;
         font-size: 30px;
         @media (max-width: 593px) {
           font-size: 20px;
         }
         @media (max-width: 414) {
          padding-top: 20px;
           margin-left: 20px;
         }
       `;

export const ExperienceH5 = styled.h5`
  color: ${({ theme }) => theme.colors.headerText};
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 25px;
  @media (max-width: 593px) {
    font-size: 20px;
  }
`;

export const ExperienceH6 = styled.h6`
  color: ${({ theme }) => theme.colors.headerText};
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const ExperienceDates = styled.h6`
  color: ${({ theme }) => theme.colors.headerText};
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 15px;
`;
