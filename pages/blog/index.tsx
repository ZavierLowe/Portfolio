import React from "react";
import Navi from "../../components/Navigation/Navi";
import FooterMain from "../../components/FooterMain";
import {
	BlogHeadingText,
	BlogHeadingSection,
	BlogHeadingDiv,
	BlogHeadingDesc,
} from "../../components/blogStyles/blog.styled";
import { Container } from "../../components/container.styled";
import Image from "next/image";
import FullcourtImgTop from "../../assets/images/Fullcourt-Project-Img2.png";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

const index = () => {
	return (
		<div>
			<Navi />
			<BlogHeadingSection backgroundColor="#020202" />
			<Container>
				<BlogHeadingDiv>
					<BlogHeadingText>Blog</BlogHeadingText>
					<BlogHeadingDesc>
						Here resides my blog on the things that I am currently working, my
						thoughts, and tutorials
					</BlogHeadingDesc>
				</BlogHeadingDiv>
				<Image src={FullcourtImgTop} alt={"image top"} width={1400}></Image>
			</Container>

			<FooterMain />
		</div>
	);
};

export default index;
