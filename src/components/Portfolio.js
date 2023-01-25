import React from "react";
import Capstone1Image from "../images/capstone1.png";
import Capstone2Image from "../images/capstone2.png";
import PortfolioLogoImg from "../images/Github_black.png";
import NiteFanBanner from "../images/nitefan-banner.jpg";
import AppStoreImage from "../images/imessage-apps.png";
import AppleLogo from "../images/Apple_black.png";
import NiteFanWeb from "../images/NiteFanWeb.png";
import WebIcon from "../images/icons8-web-64.png";
import StoveTimer from "../images/stove-timer.png";
import Logikcull1 from "../images/Logikcull-project-1.png";
import Logikcull2 from "../images/Logikcull-project-2.png";
import CoverLetterPic from "../images/AI-cover-letter-generator.png";
import RecipeGeneratorPic from "../images/AI-recipe-generator.png";
import {
  Project,
  PortfolioLogo,
  PortfolioParagraphs,
  ProjectCoverLetterWrapper,
  ProjectRecipeWrapper,
  Project2Wrapper,
  PortfolioWrapper,
  Project1Wrapper,
  ProjectImages,
  ProjectCaptionText,
  PortfolioHeadlines,
  GitHubLink,
  Project3Wrapper,
  Project4Wrapper,
  Project5Wrapper,
  Project6Wrapper,
  LogikcullPic1,
  LogikcullPic2,
  LogikcullTitle,
  LogikcullPar1,
  LogikcullPar2,
} from "../styles/Portfolio.styled";

export default function Portfolio() {
  return (
    <div>
      <PortfolioWrapper>
        <LogikcullPic1>
          <ProjectImages src={Logikcull1} alt="Logikcull project 1" />
        </LogikcullPic1>
        <LogikcullPic2>
          <ProjectImages src={Logikcull2} alt="Logikcull project 2" />
        </LogikcullPic2>

        <LogikcullTitle>
          <PortfolioHeadlines>
            Logikcull Frontend Engineering Internship Project
          </PortfolioHeadlines>
        </LogikcullTitle>
        <LogikcullPar1>
          <PortfolioParagraphs>
            As an intern at Logikcull, I had the chance to work on a significant
            project that involved migrating a section of the website from
            Backbone.js to React JS, while also implementing a new design. In
            this project, I used a React hook to pull projects and users into
            the multiselect, which has the option to select and deselect items
            based on certain conditions. In case of invalid data, the
            multiselect will display error messages based on the invalid data.
            Once the user has selected valid options, a report is generated and
            downloaded in excel format. Through this project, I gained practical
            experience with React and made a tangible contribution to the
            company by helping to reduce tech debt and improve the customer
            experience.
          </PortfolioParagraphs>
        </LogikcullPar1>

        <LogikcullPar2>
          <PortfolioParagraphs
            style={{
              fontSize: "12px",
              lineHeight: "2",
            }}
          >
            <i>
              During her time at Logikcull, Shana was consistently upbeat and
              engaged in the software engineering process. She took on a
              complicated project that required understanding a significant
              amount of legacy code and refactoring it using modern patterns and
              components. She had to work around various difficulties with
              testing and understanding the older parts of the codebase. Shana
              was communicative, thoughtful, and diligent as she worked through
              her project. She also balanced that work with presentations and
              team processes and quickly became part of the team. I think Shana
              would be an excellent engineer and team member on any software
              development squad. She has a keen eye for design and detail and
              she's very eager for new challenges.{" "}
              <b>
                -LinkedIn reference from Logikcull's Director of Engineering
              </b>
            </i>
          </PortfolioParagraphs>
        </LogikcullPar2>

        <ProjectCoverLetterWrapper>
          <Project>
            <a
              href="https://open-ai-cover-letter-generator-shanarussell.vercel.app/"
              target="_blank"
            >
              <ProjectImages
                src={CoverLetterPic}
                alt="AI Cover Letter Generator"
              />
            </a>
          </Project>
          <ProjectCaptionText>
            <PortfolioHeadlines>
              OpenAI Cover Letter Generator
            </PortfolioHeadlines>
          </ProjectCaptionText>
          <PortfolioParagraphs>
            This cover letter generator harnesses the power of the OpenAI API to
            craft personalized and impactful cover letters for job seekers.
            Built using React JS, JavaScript and Node.js, this web-based
            application allows users to easily paste in a job description and
            their relevant skills, and a custom-tailored cover letter is
            generated for them. Deployed using Vercel, this project is not only
            functional but also visually appealing and easy to use. I am excited
            to add this innovative tool to my developer portfolio, highlighting
            my ability to work with cutting-edge technologies and my passion for
            creating user-friendly and efficient tools.
          </PortfolioParagraphs>
          <br />
          <GitHubLink>
            <a
              href="https://open-ai-cover-letter-generator-shanarussell.vercel.app/"
              target="_blank"
            >
              <PortfolioLogo src={WebIcon} />
            </a>
            <a
              href="https://open-ai-cover-letter-generator-shanarussell.vercel.app/"
              target="_blank"
            >
              <PortfolioParagraphs>
                {" "}
                See this project on the web
              </PortfolioParagraphs>
            </a>
          </GitHubLink>
        </ProjectCoverLetterWrapper>
        <ProjectRecipeWrapper>
          <Project>
            <a
              href="https://open-ai-recipe-ideas-shanarussell.vercel.app/"
              target="_blank"
            >
              <ProjectImages
                src={RecipeGeneratorPic}
                alt="AI Recipe Generator"
              />
            </a>
          </Project>
          <ProjectCaptionText>
            <PortfolioHeadlines>OpenAI Recipe Generator</PortfolioHeadlines>
          </ProjectCaptionText>
          <PortfolioParagraphs>
            Similar to the cover letter generator, this recipe generator uses
            the OpenAI API to create unique and delicious recipes for users.
            Built using React JS, JavaScript and Node.js, this web-based
            application allows users to easily enter a few ingredients they have
            on hand, and a custom-tailored recipe is generated for them based on
            those ingredients. Deployed using Vercel, this project not only
            functions well but also has a simple and user-friendly interface.
            This easy to use tool stands out as it uses cutting-edge AI
            technology to solve a specific problem, and it is a great way to
            showcase my ability to find creative solutions and my dedication to
            delivering high-quality products.
          </PortfolioParagraphs>
          <br />
          <GitHubLink>
            <a
              href="https://open-ai-recipe-ideas-shanarussell.vercel.app/"
              target="_blank"
            >
              <PortfolioLogo src={WebIcon} />
            </a>
            <a
              href="https://open-ai-recipe-ideas-shanarussell.vercel.app/"
              target="_blank"
            >
              <PortfolioParagraphs>
                {" "}
                See this project on the web
              </PortfolioParagraphs>
            </a>
          </GitHubLink>
        </ProjectRecipeWrapper>
        <Project1Wrapper>
          <Project>
            <a href="http://sleepapp.co/" target="_blank">
              <ProjectImages src={NiteFanWeb} alt="NiteFan for Web" />
            </a>
          </Project>
          <ProjectCaptionText>
            <PortfolioHeadlines>NiteFan Javascript Version</PortfolioHeadlines>
            <PortfolioParagraphs>
              NiteFan helps users fall asleep
              by playing the soothing sound of fans. The white noise produced by
              fans can be very effective in blocking out external noise and
              creating a relaxing environment, which can make it easier to fall
              asleep. Additionally, NiteFan is available in both web and iOS
              versions, making it easily accessible to a wide range of users.
              The fact that both versions offer the same functionality and user
              experience further enhances the overall user experience. I
              included NiteFan in my portfolio to showcase my ability to develop solutions regardless of language or platform as well as my ability to create practical,
              problem-solving projects.
            </PortfolioParagraphs>
            <br />
            <GitHubLink>
              <a
                href="https://github.com/shanarussell/nite-fan-javascript"
                target="_blank"
              >
                <PortfolioLogo src={PortfolioLogoImg} />
              </a>
              <a
                href="https://github.com/shanarussell/nite-fan-javascript"
                target="_blank"
              >
                <PortfolioParagraphs>
                  {" "}
                  See this project on GitHub
                </PortfolioParagraphs>
              </a>
            </GitHubLink>
            <GitHubLink>
              <a href="http://sleepapp.co/" target="_blank">
                <PortfolioLogo src={WebIcon} />
              </a>
              <a href="http://sleepapp.co/" target="_blank">
                <PortfolioParagraphs>
                  {" "}
                  See this project on the web
                </PortfolioParagraphs>
              </a>
            </GitHubLink>
          </ProjectCaptionText>
        </Project1Wrapper>

        <Project2Wrapper>
          <Project>
            <a
              href="https://stove-timer.s3.amazonaws.com/index.html"
              target="_blank"
            >
              <ProjectImages src={StoveTimer} alt="Stove Timer" />
            </a>
          </Project>
          <ProjectCaptionText>
            <PortfolioHeadlines>Stove Timer - ReactJS</PortfolioHeadlines>
            <PortfolioParagraphs>
              I am in the process of developing a cooking timer that visually
              represents the burners on a stovetop. The timer currently allows
              users to set up to 4 separate timers and hear alerts customized to
              that particular burner when each timer finishes. There is also a
              blinking indicator to alert users when a timer has completed. I
              built this version using React and am currently gathering feedback
              to add new features. I am also planning to create mobile app
              versions for iOS and Android in the future. Even though this project is still in progress, I'm including it in my portfolio to show my skills in JavaScript and CSS, along with my ability to deliver a functional minimum viable solution.
            </PortfolioParagraphs>
            <br />
            <GitHubLink>
              <a
                href="https://github.com/shanarussell/stove-timer"
                target="_blank"
              >
                <PortfolioLogo src={PortfolioLogoImg} />
              </a>
              <a
                href="https://github.com/shanarussell/stove-timer"
                target="_blank"
              >
                <PortfolioParagraphs>
                  {" "}
                  See this project on GitHub
                </PortfolioParagraphs>
              </a>
            </GitHubLink>
            <GitHubLink>
              <a
                href="https://stove-timer.s3.amazonaws.com/index.html"
                target="_blank"
              >
                <PortfolioLogo src={WebIcon} />
              </a>
              <a
                href="https://stove-timer.s3.amazonaws.com/index.html"
                target="_blank"
              >
                <PortfolioParagraphs>
                  {" "}
                  See this project on the web
                </PortfolioParagraphs>
              </a>
            </GitHubLink>
          </ProjectCaptionText>
        </Project2Wrapper>

        <Project3Wrapper>
          <Project>
            <a
              href="https://apps.apple.com/us/app/nitefan-white-noise-fan-app/id1011621168"
              target="_blank"
            >
              <ProjectImages src={NiteFanBanner} target="_blank" />
            </a>
          </Project>
          <ProjectCaptionText>
            <PortfolioHeadlines>iOS White Noise App</PortfolioHeadlines>
            <PortfolioParagraphs>
              A white noise app created in Swift and XCode. Published and sold
              in the Apple App store.
            </PortfolioParagraphs>
            <br />
            <GitHubLink>
              <a
                href="https://apps.apple.com/us/app/nitefan-white-noise-fan-app/id1011621168"
                target="_blank"
              >
                <PortfolioLogo src={AppleLogo} />
              </a>
              <a
                href="https://apps.apple.com/us/app/nitefan-white-noise-fan-app/id1011621168"
                target="_blank"
              >
                See this on the Apple App Store
              </a>
            </GitHubLink>
          </ProjectCaptionText>
        </Project3Wrapper>

        <Project4Wrapper>
          <Project>
            <a
              href="https://apps.apple.com/us/developer/shana-russell/id1010975891?see-all=i-message-apps"
              target="_blank"
            >
              <ProjectImages src={AppStoreImage} target="_blank" />
            </a>
          </Project>
          <ProjectCaptionText>
            <PortfolioHeadlines>iMessage Sticker Apps</PortfolioHeadlines>
            <PortfolioParagraphs>
              Collection of punny stickers created with XCode, Illustrator, and
              Photoshop that runs through the iMessage application on iPhone and
              iPad OS
            </PortfolioParagraphs>
            <br />
            <GitHubLink>
              <a
                href="https://apps.apple.com/us/developer/shana-russell/id1010975891?see-all=i-message-apps"
                target="_blank"
              >
                <PortfolioLogo src={AppleLogo} />
              </a>
              <a
                href="https://apps.apple.com/us/developer/shana-russell/id1010975891?see-all=i-message-apps"
                target="_blank"
              >
                See this on the Apple App Store
              </a>
            </GitHubLink>
          </ProjectCaptionText>
        </Project4Wrapper>

        <Project5Wrapper>
          <Project>
            <a
              href="https://github.com/shanarussell/text_based_vending_machine"
              target="_blank"
            >
              <ProjectImages src={Capstone1Image} alt="Capstone1" />
            </a>
          </Project>
          <ProjectCaptionText>
            <PortfolioHeadlines>Text-Based Vending Machine</PortfolioHeadlines>
            <PortfolioParagraphs>
              My first capstone project for the Merit America Java development
              boot camp. With the assistance of my pair programming partner, I
              created this virtual vending machine application with command-line
              interface allowing users to deposit money, choose a product, and
              return the correct change. Inventory is loaded via a text file and
              transactions are also logged to a text file. Utilizes Java, OOP,
              File I/O
            </PortfolioParagraphs>
            <br />
            <GitHubLink>
              <a
                href="https://github.com/shanarussell/text_based_vending_machine"
                target="_blank"
              >
                <PortfolioLogo src={PortfolioLogoImg} />
              </a>
              <a
                href="https://github.com/shanarussell/text_based_vending_machine"
                target="_blank"
              >
                <PortfolioParagraphs>
                  {" "}
                  See this project on GitHub
                </PortfolioParagraphs>
              </a>
            </GitHubLink>
          </ProjectCaptionText>
        </Project5Wrapper>

        <Project6Wrapper>
          <Project>
            <a
              href="https://github.com/shanarussell/TEnmo-capstone"
              target="_blank"
            >
              <ProjectImages src={Capstone2Image} alt="Capstone2" />
            </a>
          </Project>
          <ProjectCaptionText>
            <PortfolioHeadlines>
              CLI Money Transfer Application
            </PortfolioHeadlines>
            <PortfolioParagraphs>
              My second capstone project for Merit America. Together with my
              pair programming partner, we were tasked with building a RESTful
              API server and command-line application for a fictitious company
              named TEnmo, whose product is an online payment service for
              transferring "TE bucks" between friends. Utilizes Java, Spring
              Boot, PostgreSQL, RESTful API, Spring Data JPA, Spring Security
            </PortfolioParagraphs>
            <br />
            <GitHubLink>
              <a
                href="https://github.com/shanarussell/TEnmo-capstone"
                target="_blank"
              >
                <PortfolioLogo src={PortfolioLogoImg} />
              </a>
              <a
                href="https://github.com/shanarussell/TEnmo-capstone"
                target="_blank"
              >
                <PortfolioParagraphs>
                  {" "}
                  See this project on GitHub
                </PortfolioParagraphs>
              </a>
            </GitHubLink>
          </ProjectCaptionText>
        </Project6Wrapper>
      </PortfolioWrapper>
    </div>
  );
}
