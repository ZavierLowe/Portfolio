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
import FullcourtPreview from "../assets/images/Fullcourt Preview.png";
import BostonPrview from "../assets/images/Boston Preview.png";
import DXCMacbook from "../assets/images/DXC-Macbook.png";
import DelphicMac from "../assets/images/Delphic-Mac.png";
import Image from "next/image";
import Link from "next/link";

const ProjectGrid = () => {
	return (
		<div>
			<Container>
				<CardGrid>
					{/*  Card 1 */}
					<div className="card-wrapper">
						<Link href="/fullcourt">
							<Image
								className="img-hover"
								layout="intrinsic"
								src={FullcourtPreview}
								alt="Fullcourt Image"
							/>
						</Link>
						<CardText>
							<CardMeta>Mobile Development & UX Design</CardMeta>
							<CardHeading>FullCourt</CardHeading>
							<CardDescription>
								A basketball app helping users find pick up basketball games
								with ease.
							</CardDescription>
						</CardText>
					</div>

					{/*  Card 2 */}
					<CardWrapper>
						<a
							href="https://delphic-beauty.netlify.app/"
							target="_blank"
							rel="noreferrer">
							<Image
								className="img-hover"
								layout="intrinsic"
								src={DelphicMac}
								alt="Delphic Preview"
							/>
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
						<a
							href="https://thedxcproductions.com/"
							target="_blank"
							rel="noreferrer">
							<Image
								className="img-hover"
								layout="intrinsic"
								src={DXCMacbook}
								alt="DXC Preview"
							/>
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
						<a
							href="https://delphic-beauty.netlify.app/"
							target="_blank"
							rel="noreferrer">
							<Image
								className="img-hover"
								layout="intrinsic"
								src={BostonPrview}
								alt="Boston Preview"
							/>
						</a>
						<CardText>
							<CardMeta>UX Design</CardMeta>
							<CardHeading>City of Boston Mayors Office</CardHeading>
							<CardDescription>
								Pitching Boston as the Place for Business
							</CardDescription>
						</CardText>
					</CardWrapper>
				</CardGrid>
			</Container>
		</div>
	);
};

export default ProjectGrid;
