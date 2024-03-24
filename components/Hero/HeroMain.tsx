import React from "react";
import styled from "styled-components";
import {
	Hero,
	HeroDescription,
	HeroHeading,
	HeroText,
} from "./heroSection.styled";
import { HighlightStyled, HighlightStyledName } from "../highlight.styled";
import { Button } from "../Button.styles";
import { Container } from "../container.styled";
import { Blob } from "../Blob.styled";
import Link from "next/link";


const HeroTitle = styled.h1 `
	

`

const HeroMain = () => {
	return (
		<div>
			<Container>
				<Blob />
				<Hero>
					<HeroHeading>
						Creating & Developing Visual Solutions With Purpose
					</HeroHeading>
					<HeroDescription>
						Hi, I’m Zavier and I craft visual solutions for brands,
						corporations, startups, and entrepreneurs taking their visual impact
						to elite status. If your looking for your website to have the latest
						modern feel. Let’s create something together that
						will make heads turn!
					</HeroDescription>
					{/* <Button>Explore Projects</Button> */}
				</Hero>
			</Container>
		</div>
	);
};

export default HeroMain;
