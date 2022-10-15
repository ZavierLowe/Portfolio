import React from "react";
import { Container } from "./container.styled";
import { CardGrid } from "./cardGrid.styled";
import {
	Card,
	CardDescription,
	CardHeading,
	CardMeta,
	CardText,
	CardWrapper,
} from "./Card.styled";
import DelphicPreview from "../assets/images/DelphicPreview.png";
import MacbookDelphic from "../assets/images/Macbook Pro Delphic.png";
import DelphicPreviewNew from "../assets/images/DelphicPreviewNew.png";
import DxcPreview from "../assets/images/DXC-Preview.png";
import Image from "next/image";
import Link from "next/link";

const ProjectGrid = () => {
	return (
		<div>
			<Container>
				<CardGrid>
					{/*  Card 1 */}
					<CardWrapper>
						<a href="https://delphic-beauty.netlify.app/" target="_blank">
							<Card>
								<Image
									className="img-hover"
									layout="intrinsic"
									src={DelphicPreviewNew}
								/>
							</Card>
						</a>
						<CardText>
							<CardMeta>Mobile Development</CardMeta>
							<CardHeading>FullCourt</CardHeading>
							<CardDescription>
								A basketball app helping users find pick up basketball games
								with ease.
							</CardDescription>
						</CardText>
					</CardWrapper>
					{/*  Card 2 */}
					<CardWrapper>
						<a href="https://delphic-beauty.netlify.app/" target="_blank">
							<Card>
								<Image
									className="img-hover"
									layout="intrinsic"
									src={DelphicPreviewNew}
								/>
							</Card>
						</a>
						<CardText>
							<CardMeta>Front End Devlopment</CardMeta>
							<CardHeading>Delphic Beauty</CardHeading>
							<CardDescription>
								Homepage for an e-Commerce skincare brand
							</CardDescription>
						</CardText>
					</CardWrapper>
					{/*  Card 3 */}

					<CardWrapper>
						<a href="https://thedxcproductions.com/" target="_blank">
							<Card>
								<Image
									className="img-hover"
									layout="intrinsic"
									src={DxcPreview}
								/>
							</Card>
						</a>
						<CardText>
							<CardMeta>Front End Development</CardMeta>
							<CardHeading>DXC Productions</CardHeading>
							<CardDescription>
								A portfolio for helping a Filmmaker showcasing her work
							</CardDescription>
						</CardText>
					</CardWrapper>

					{/* Card 4*/}
					<CardWrapper>
						<a href="https://delphic-beauty.netlify.app/" target="_blank">
							<Card>
								<Image
									className="img-hover"
									layout="intrinsic"
									src={DelphicPreviewNew}
								/>
							</Card>
						</a>
						<CardText>
							<CardMeta>Mobile Development</CardMeta>
							<CardHeading>FullCourt</CardHeading>
							<CardDescription>
								A basketball app helping users find pick up basketball games
								with ease.
							</CardDescription>
						</CardText>
					</CardWrapper>
				</CardGrid>
			</Container>
		</div>
	);
};

export default ProjectGrid;
