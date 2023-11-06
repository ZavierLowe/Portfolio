import React from "react";
import { Hero, HeroHeading, HeroText } from "./heroSection.styled";
import { HighlightStyled, HighlightStyledName } from "./highlight.styled";
import { Button } from "./Button.styles";
import { Container } from "./container.styled";
import Link from "next/link";

const HeroMain = () => {
	return (
		<div>
			<Container>
				<Hero>
					<HeroText>
						<HeroHeading>
<<<<<<< HEAD
							Hey 👋🏾 , Im{" "}
							<Link href="/about">
								<a className="link-wrapper">Zavier</a>
							</Link>{" "}
							a Cyber Security Professional focused on securing
							<HighlightStyled color="#7926e6">
								{" "}
								Cloud Environments{" "}
							</HighlightStyled>
=======
							 I'm{" "}
							<Link  href="/about">
								<a className="link-wrapper">Zavier</a>
							</Link>{" "}
							a Cyber Security Analyst that is excited to help companies protect their assets and
							<HighlightStyled > mitigate risk </HighlightStyled> through 
							<HighlightStyled color="#a337eb"> Threat Modeling</HighlightStyled>
							
>>>>>>> 992b2b7659a1db9ab6b71dfe6870eb3d42a9d849
						</HeroHeading>
					</HeroText>
					<Button>See My Work</Button>
				</Hero>
			</Container>
		</div>
	);
};

export default HeroMain;
