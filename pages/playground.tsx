import React, { lazy } from 'react';
import Navi from "../components/Navi";
import FooterMain from "../components/FooterMain";
import {Container} from "../components/container.styled";
import {PageDescription, PageHeader, PageHeadingText, PageHeadingTop} from "../components/PageHeading.styled";
import {PlaygroundGridMain, PlaygroundWrapper} from "../components/PlaygroundGrid.styled";
import {PlayGroundImg} from "../components/PlaygroundStyle.styled";
import {CardDescription} from "../components/Card.styled";
import SettingsPage from "../assets/images/Settings Page.png";
import SocialProfile from "../assets/images/Socail-Profile-Max 1.png"
import MusicPlayer from "../assets/images/Music-Player.jpg"
import SneakerProduct from "../assets/images/Sneaker-ProductPage.png"
import AppIcon from "../assets/images/App Icon.png"
import MortgageCalculator from "../assets/images/Mortgage Calculator.png"
import EmailReceipt from "../assets/images/Email Receipt.png"
import SignupScreen from "../assets/images/Sign Up Screen.png"
import RealEstateGrid from "../assets/images/Real Estate Grid.png"
import SocialMediaDash from "../assets/images/SocialMediaDashboard.png"
import Image from "next/image";
import MobileNav from '../components/MobileNav';


const playground = () => {
    return (
			<div>
				<Navi/>
				<MobileNav/>
				<PageHeadingTop>
					<Container>
						<PageHeadingText>
							<PageHeader>Playground</PageHeader>
							<PageDescription>
								Here are some of my experimental designs from over the years
							</PageDescription>
						</PageHeadingText>
					</Container>
				</PageHeadingTop>

				<Container>
					<PlaygroundGridMain>
						<PlaygroundWrapper>
							<Image layout="intrinsic" src={SettingsPage} />

							<CardDescription>Settings Page</CardDescription>
						</PlaygroundWrapper>
						<PlaygroundWrapper>
							<Image layout="intrinsic" src={SocialProfile} />

							<CardDescription>Profile Page</CardDescription>
						</PlaygroundWrapper>
						<PlaygroundWrapper>
							<Image layout="intrinsic" src={MusicPlayer} />

							<CardDescription>Music Player</CardDescription>
						</PlaygroundWrapper>
						<PlaygroundWrapper>
							<Image layout="intrinsic" src={SneakerProduct} />

							<CardDescription>E-Commerce Product Page</CardDescription>
						</PlaygroundWrapper>
						<PlaygroundWrapper>
							<Image layout="intrinsic" src={AppIcon} />

							<CardDescription>App Icon</CardDescription>
						</PlaygroundWrapper>
						<PlaygroundWrapper>
							<Image layout="intrinsic" src={MortgageCalculator} />

							<CardDescription>Mortgage Calculator</CardDescription>
						</PlaygroundWrapper>
						
						<PlaygroundWrapper>
							<Image layout="intrinsic" src={EmailReceipt} />

							<CardDescription>Email Receipt</CardDescription>
						</PlaygroundWrapper>
						<PlaygroundWrapper>
							<Image layout="intrinsic" src={SignupScreen} />

							<CardDescription>Sign Up </CardDescription>
						</PlaygroundWrapper>
						<PlaygroundWrapper>
							<Image layout="intrinsic" src={SocialMediaDash} />

							<CardDescription>Social Media Dashboard </CardDescription>
						</PlaygroundWrapper>
						<PlaygroundWrapper>
							<Image layout="intrinsic" src={RealEstateGrid} />

							<CardDescription>Real Estate Grid </CardDescription>
						</PlaygroundWrapper>
					</PlaygroundGridMain>
				</Container>

				<FooterMain />
			</div>
		);
};

export default playground;
