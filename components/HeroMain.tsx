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
							Hey 👋🏾 , I'm{" "}
							<a className="link-wrapper" href="/about">
								<HighlightStyledName color="#EC5D4D">
									Zavier
								</HighlightStyledName>{" "}
							</a>
							a Developer & Designer that is excited to make
							<HighlightStyled color="#EC5D4D"> Stunning </HighlightStyled> User
							Interfaces look good and function great!
						</HeroHeading>
					</HeroText>
					<Button>See My Work</Button>
				</Hero>
			</Container>
		</div>
	);
};

export default HeroMain;
