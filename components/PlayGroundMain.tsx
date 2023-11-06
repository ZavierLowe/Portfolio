import React from 'react';
import {
    PlayGroundSection,
    PlayGroundContent,
    PlayGroundDescription,
    PlayGroundGrid,
    PlayGroundHeading, 
} from "./PlaygroundStyle.styled";
import {Container} from "./container.styled";
import {Button} from "./Button.styles";
import {CardDescription} from "./Card.styled";
import MortgageCalculator from "../assets/images/Mortgage Calculator.png";
import RealEstateGrid from "../assets/images/Real Estate Grid.png";
import SneakerProduct from "../assets/images/Sneaker-ProductPage.png";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';



const PlaygroundMain = () => {
	   
    
	   return (
				<div>
					<PlayGroundSection>
						<Container>
							<PlayGroundContent>
								<PlayGroundHeading> Playground</PlayGroundHeading>
								<PlayGroundDescription>
									Here are some of my experimental designs over the years
								</PlayGroundDescription>
							</PlayGroundContent>
							<Link href={"/playground"}>
								<Button>See More</Button>
							</Link>
							<PlayGroundGrid>
								
									<Image  src={MortgageCalculator} alt="Mortgage Calculator" />
								

								
									<Image  src={RealEstateGrid} alt="Real Estate Grid" />
								
								
									<Image  src={SneakerProduct} alt="Sneaker Product Page" />
								
							</PlayGroundGrid>
						</Container>
					</PlayGroundSection>
				</div>
			);
};

export default PlaygroundMain;
