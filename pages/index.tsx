import type { NextPage } from "next";
import Head from "next/head";
import Marquee from "../components/marquee/Marquee";
import Navi from "../components/Navigation/Navi";
import FooterMain from "../components/FooterMain";
import PlayGroundMain from "../components/PlayGroundMain";
import ProjectGrid from "../components/ProjectGrid";
import HeroMain from "../components/Hero/HeroMain";
import SocialImage from "../assets/images/Settings Page.png";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "../components/MobileNav";
import ProjectGridWide from "../components/ProjectGridWide";
import { headers } from "next/headers";
import Navigation from "../components/Navigation/Navigation";
import { Grain } from "../components/Grain.styled";
import HeroSection from "../components/Hero/HeroSection";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Zavier Lowe </title>
				<meta name="description" content="Zavier Lowe Portfolio" />
				<link rel="icon" href="/zavier-favicon.png" />
			</Head>

			<div>
				
				<div className="page-wrapper"> 

				<div className="">


				{/* <Navi /> */}
				<Navigation/>
				{/* <MobileNav /> */}
				{/* Hero Section */}
				<HeroSection/>
				<Marquee />
				{/* Project Grid */}
				{/* <ProjectGridWide/> */}
				<ProjectGrid />
				{/* Playground Section */}
				<PlayGroundMain />
				{/*  Footer  */}

				<FooterMain />
				{/* <FooterNew /> */}
				</div>
				
				</div>
				
				

				
			</div>
		</div>
	);
};

export default Home;
