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
							<Link  href="/about">
								<a className="link-wrapper">Zavier</a>
							</Link>{" "}
							a Developer & Designer that is excited to make
							<HighlightStyled color="#EC5D4D"> Stunning </HighlightStyled> User
							Interfaces look good and function great!
						</HeroHeading>
					</HeroText>
					{/* <Button>See My Work</Button> */}
				</Hero>
			</Container>
		</div>
	);
};

export default HeroMain;
