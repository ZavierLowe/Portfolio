import React from 'react';
import {Hero, HeroHeading, HeroText} from "./heroSection.styled";
import {HighlightStyled} from "./highlight.styled";
import {Button} from "./Button.styles";
import {Container} from "./container.styled";

const HeroMain = () => {
    return (
			<div>
				<Container>
					<Hero>
						<HeroText>
							<HeroHeading>
								Hey, I'm Zavier a Front End Developer who loves making
								<HighlightStyled color="#EC5D4D">
									{" "}
									Stunning{" "}
								</HighlightStyled>{" "}
								User Interfaces that people love.
							</HeroHeading>
						</HeroText>
						<Button>See My Work</Button>
					</Hero>
				</Container>
			</div>
		);
};

export default HeroMain;
