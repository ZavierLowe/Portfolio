import React from "react";
import { Container } from "../components/container.styled";
import FooterMain from "../components/FooterMain";
import MobileNav from "../components/MobileNav";
import Navi from "../components/Navi";
import {
	ProjectFlex,
	ProjectHeadingDesc,
	ProjectHeadingDiv,
	ProjectHeadingText,
	ProjectImgWrapper,
	ProjectTextDesc,
	ProjectTextHeading,
	ProjectTextSection,
	ProjectTextWrapper,
} from "../components/ProjectPage.styled";
import BostonTopImage from "../assets/images/BOS-Top-Picture Macbook.png";
import BostonServices from "../assets/images/Boston Services-p-800.png";
import BostonContact from "../assets/images/Contact-Us-adapt-p-800.png";
import BostonPitch from "../assets/images/Pitch-adapt-p-800.png";
import BostonGif from "../assets/images/Boston Lifestyle Optimized.gif";
import BostonInsights from "../assets/images/Boston insights-p-800.png";
import BostonPersona from "../assets/images/Boston-Persona-p-800.png";
import Image from "next/image";

const projectpage = () => {
	return (
		<div>
			<Navi />
			<MobileNav />
			<Container>
				<ProjectHeadingDiv>
					<ProjectHeadingText>
						City of Boston <br /> Business Strategy Unit
					</ProjectHeadingText>
					<ProjectHeadingDesc>
						Pitching the City of Boston for Business{" "}
					</ProjectHeadingDesc>
				</ProjectHeadingDiv>
			</Container>

			<Image src={BostonTopImage} layout="intrinsic" />

			<ProjectTextWrapper>
				<ProjectTextHeading>Summary</ProjectTextHeading>
				<ProjectTextDesc>
					The City of Boston’s Business Strategy Unit helps businesses relocate
					or expand within the city — a function that’s vital during the
					pandemic. But the Unit’s online presence did not represent the value
					they offer to businesses. So, working remotely, we overhauled their
					landing page, adding structure, visual elements and a call to action. The
					final design supports the Unit’s strategic priority of facilitating
					conversations with organizations that could grow in Boston.
				</ProjectTextDesc>
			</ProjectTextWrapper>
			<ProjectTextWrapper>
				<ProjectTextHeading>Doing the Research</ProjectTextHeading>
				<ProjectTextDesc>
					Our goal was to understand what stakeholders and employees value when
					relocating to a new city such as Boston. After interviewing we
					synthesized our research and came up with what each groups cares abou
					the most.
				</ProjectTextDesc>
				<ProjectImgWrapper>
					<Image src={BostonInsights} />
				</ProjectImgWrapper>
			</ProjectTextWrapper>
			<ProjectTextWrapper>
				<ProjectTextHeading>Bringing Our Insights to Life</ProjectTextHeading>
				<ProjectTextDesc>
					We developed three personas, each with their own detailed list of
					behaviors, challenges, and goals, to embody the synthesis of our
					research. These representations served as useful reminders throughout
					the rest of the design process to ensure our designs matched our
					users’ best interests. We focused on the stakeholder who makes the
					decisions as this is the main persona that we were targeting.
				</ProjectTextDesc>
				<ProjectImgWrapper>
					<Image src={BostonPersona} />
				</ProjectImgWrapper>
			</ProjectTextWrapper>
			<ProjectTextSection backgroundColor="#286391">
				<ProjectTextWrapper>
					<ProjectTextHeading>Wireframes</ProjectTextHeading>
					<ProjectTextDesc>
						Before creating the wireframes we spoke with our client to see what
						was possible working within the limitations of the current system.
						Since it would be difficult for the client to come up with new
						components to integrate into their system. We took components within
						their existing system and adapted it to use in our design.
					</ProjectTextDesc>
				</ProjectTextWrapper>
				<ProjectFlex>
					<ProjectImgWrapper>
						<Image className="img-project" src={BostonServices} />
					</ProjectImgWrapper>
					<ProjectImgWrapper>
						<Image src={BostonContact} />
					</ProjectImgWrapper>
					<ProjectImgWrapper>
						<Image src={BostonPitch} />
					</ProjectImgWrapper>
				</ProjectFlex>
			</ProjectTextSection>
			<ProjectTextWrapper>
				<ProjectTextHeading color="#286391">Execution</ProjectTextHeading>
				<ProjectTextDesc>
					Since the Business Strategy Unit is aimed at helping and providing
					information about Boston’s economy and culture. We showed how users
					could receive that information in a visually compelling and dynamic
					way, by creating interactive tabs that users could click through to
					find key information about Boston with an accompanying picture related
					to that information.
				</ProjectTextDesc>
			</ProjectTextWrapper>
			<ProjectFlex>
				<ProjectImgWrapper>
					<Image className="img-project" src={BostonGif} />
				</ProjectImgWrapper>
			</ProjectFlex>
			<ProjectTextWrapper>
				<ProjectTextDesc>Interactive Tabs in Action</ProjectTextDesc>
			</ProjectTextWrapper>

			<FooterMain />
		</div>
	);
};

export default projectpage;
