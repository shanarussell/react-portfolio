import React from "react";
import Capstone1Image from "../images/capstone1.png";
import Capstone2Image from "../images/capstone2.png";
import PortfolioLogoImg from "../images/Github_black.png";
import NiteFanBanner from "../images/nitefan-banner.jpg";
import AppStoreImage from "../images/imessage-apps.png";
import AppleLogo from "../images/Apple_black.png";
import {
  Project,
  PortfolioLogo,
  PortfolioParagraphs,
  Project2Wrapper,
  PortfolioWrapper,
  Project1Wrapper,
  ProjectImages,
  ProjectCaptionText,
  PortfolioHeadlines,
  GitHubLink,
  Project3Wrapper,
  Project4Wrapper,
} from "../styles/Portfolio.styled";

export default function Portfolio() {
  return (
    <div>
      <PortfolioWrapper>
        <Project1Wrapper>
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
        </Project1Wrapper>

        <Project2Wrapper>
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
      </PortfolioWrapper>
    </div>
  );
}
