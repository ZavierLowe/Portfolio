import React from "react";
import { Container } from "../components/container.styled";
import Navi from "../components/Navi";
import FooterMain from "../components/FooterMain";
import {
	AboutHeading,
	AboutSection,
	AboutText,
} from "../components/AboutStyle.styled";
import MobileNav from "../components/MobileNav";

const about = () => {
	return (
		<div>
			<Navi />
			<MobileNav />
			<Container>
				<AboutSection>
					<AboutHeading>My Story</AboutHeading>
				
						
						
						<AboutText>
							Over the years I got my degree in Psychology and wondered how
							digital experiences are created. With my interest peeked, I
							attended a User Experience bootcamp to understand the design
							process and how users interact with digital interfaces. From there
							I was able to design interfaces but something from my skillet felt
							like it was missing. It was the ability to code! I wanted to know
							the ins and outs of creating digital experiences from the design
							and development perspective.
						</AboutText>
						
						<AboutText>
							With that in mind I decided to take another bootcamp in Software
							Engineering. It was tough but I was able to face one of my fears
							and learn something that I was running away from. Now today I am
							proud I took that leap because being developer is so rewarding and
							I dont regret taking that chance and believing in myself. I am so
							excited that now I have the ability to create the digital
							experiences I only dreamed about.
						</AboutText>
					
				</AboutSection>
			</Container>

			<FooterMain />
		</div>
	);
};

export default about;
