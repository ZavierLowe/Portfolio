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
							Hey 👋🏾 , Im{" "}
							
								<a className="link-wrapper">Zavier</a>
							
							a Cyber Security Professional focused on securing
							<HighlightStyled color="#7926e6">
								{" "}
								Cloud Environments{" "}
							</HighlightStyled>
						</HeroHeading>
					</HeroText>
					<Button>See My Work</Button>
				</Hero>
			</Container>
		</div>
	);
};

export default HeroMain;
