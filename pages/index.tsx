import type { NextPage } from "next";
import Head from "next/head";
import Marquee from "../components/marquee/Marquee";
import Navi from "../components/Navi";
import FooterMain from "../components/FooterMain";
import PlayGroundMain from "../components/PlayGroundMain";
import ProjectGrid from "../components/ProjectGrid";
import HeroMain from "../components/HeroMain";
import SocialImage from "../assets/images/Settings Page.png";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "../components/MobileNav";
import ProjectGridWide from "../components/ProjectGridWide";
import FooterNew from "../components/Footer2/FooterNew";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Zavier Lowe </title>
				<meta name="description" content="Zavier Lowe Portfolio" />
				<link rel="icon" href="/zavier-favicon.png" />
			</Head>

			<div>
				<Navi />
				<MobileNav />
				{/* Hero Section */}
				<HeroMain />
				<Marquee />
				{/* Project Grid */}
				<ProjectGridWide/>
				{/* <ProjectGrid /> */}
				{/* Playground Section */}
				<PlayGroundMain />
				{/*  Footer  */}
				
				<FooterMain />
				{/* <FooterNew /> */}
			</div>
		</div>
	);
};

export default Home;
