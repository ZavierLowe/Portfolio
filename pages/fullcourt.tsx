import React from "react";
import { Container } from "../components/container.styled";
import FooterMain from "../components/FooterMain";
import MobileNav from "../components/MobileNav";
import Navi from "../components/Navi";
import {
	ProjectFlex,
	ProjectHeadingDesc,
	ProjectHeadingDiv,
	ProjectHeadingSection,
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
import FullcourtImgTop from "../assets/images/Fullcourt-Project-Img2.png";
import Image from "next/image";
import { HighlightStyled } from "../components/highlight.styled";
import DesignSystem from "../assets/images/DesignSystem-v1.png";
import FullcourtPreview from "../assets/images/Fullcourt Preview.png";

const fullcourt = () => {
	return (
		<div>
			<Navi />
			<MobileNav />

			<ProjectHeadingSection>
				<Container>
					<ProjectHeadingDiv>
						{/* <ProjectHeadingDesc>
							Mobile Devlopment & UX Design
						</ProjectHeadingDesc> */}
						<ProjectHeadingText>
							Fullcourt
							<br />
						</ProjectHeadingText>
						<ProjectHeadingDesc>
							A mobile app helping{" "}
							<HighlightStyled color="#F15C22">
								basketball heads
							</HighlightStyled>{" "}
							find pickup games to play!{" "}
						</ProjectHeadingDesc>
					</ProjectHeadingDiv>
				</Container>
			</ProjectHeadingSection>
			<Image src={FullcourtImgTop} layout="intrinsic" />

			<ProjectTextWrapper>
				<ProjectTextHeading>Summary</ProjectTextHeading>
				<ProjectTextDesc>
					I'm a Designer and Developer at Fullcourt which is a young startup
					with 40k users and counting. When introducing new features, we launch
					quickly and refine on the fly. I work on adding new feautes to and
					revamping old ones to provide the best experience to our users.
				</ProjectTextDesc>
			</ProjectTextWrapper>
			<ProjectTextWrapper>
				<ProjectTextHeading>Editing Existing Groups</ProjectTextHeading>
				<ProjectTextDesc>
					For the current iteration of groups users coudl join groups backgorund
					information about groups and how they potentially work image at the
					bottom
				</ProjectTextDesc>
				<ProjectImgWrapper>
					<Image src={FullcourtPreview} />
				</ProjectImgWrapper>
			</ProjectTextWrapper>
			<ProjectTextWrapper>
				<ProjectTextHeading>
					How I solved the Idea of having the edit group button where the joined{" "}
				</ProjectTextHeading>
				<ProjectTextDesc>
					We thought about placing the button to edit the group the the
					navigation at the top but we came to the conclusion
				</ProjectTextDesc>
				<ProjectImgWrapper>
					<Image src={BostonPersona} />
				</ProjectImgWrapper>
			</ProjectTextWrapper>
			<ProjectTextWrapper>
				<ProjectTextHeading>
					Error States & Character limitation{" "}
				</ProjectTextHeading>
				<ProjectTextDesc>
					In allowing users to edit groups we thought it would be helpful to
					give an error state if the group name is already available. This helps
					the development not worry about having multiple groups with the same
					name and causing confusing in the database. We also limited the amout
					of characters for the groups description to not override the system
				</ProjectTextDesc>
				<ProjectImgWrapper>
					<Image src={BostonPersona} />
				</ProjectImgWrapper>
			</ProjectTextWrapper>
			<ProjectTextWrapper>
				<ProjectTextHeading>
					Error States & Character limitation{" "}
				</ProjectTextHeading>
				<ProjectTextDesc>
					In allowing users to edit groups we thought it would be helpful to
					give an error state if the group name is already available. This helps
					the development not worry about having multiple groups with the same
					name and causing confusing in the database. We also limited the amout
					of characters for the groups description to not override the system
				</ProjectTextDesc>
				<ProjectImgWrapper>
					<Image src={BostonPersona} />
				</ProjectImgWrapper>
			</ProjectTextWrapper>
			<ProjectTextSection backgroundColor="#F15C22">
				<ProjectTextWrapper>
					<ProjectTextHeading>
						Streamlining the Game Creaton Process
					</ProjectTextHeading>
					<ProjectTextDesc>
						Before creating a game was a multi-screen process that took too long
						for them to create games. Thinking through our options. I thought it
						was best for us to consolidate the options to one screen and have
						menus that allow you to adjust the game settings such as date,time,
						and if the game is a recurring game.
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
				<ProjectTextHeading color="#F15C22">
					Leveling Up Our Color System
				</ProjectTextHeading>
				<ProjectTextDesc>
					I expanded our color sysetm to help developers have a consistent
					coloring convention system with documentation of when to use those
					colors.
				</ProjectTextDesc>
			</ProjectTextWrapper>
			<ProjectFlex>
				<ProjectImgWrapper>
					<Image
						className="img-project"
						layout="intrinsic"
						src={DesignSystem}
					/>
				</ProjectImgWrapper>
			</ProjectFlex>
			<ProjectTextWrapper></ProjectTextWrapper>

			<FooterMain />
		</div>
	);
};

export default fullcourt;
