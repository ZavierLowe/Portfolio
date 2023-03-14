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
							 I'm{" "}
							<Link  href="/about">
								<a className="link-wrapper">Zavier</a>
							</Link>{" "}
							a Cyber Security Analyst that is excited to help companies protect their assets and
							<HighlightStyled > mitigate risk </HighlightStyled> through 
							<HighlightStyled color="#a337eb"> Threat Modeling</HighlightStyled>
							
						</HeroHeading>
					</HeroText>
					<Button>See My Work</Button>
				</Hero>
			</Container>
		</div>
	);
};

export default HeroMain;
