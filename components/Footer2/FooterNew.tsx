import React from "react";
import {
	FooterContainer,
	FooterContent,
	FooterHeading,
	FooterText,
	SocialIcon,
	SocialIcons,
} from "./footerNew.styled";
import { Container } from "../container.styled";

const footerNew = () => {
	return (
		<div>
			<FooterContainer>
                <Container>

				<FooterHeading>
					Say What's Up
				</FooterHeading>
				<FooterContent>
					<SocialIcons>
						<SocialIcon href="">
							{/* Add your social media links */}
							<i className="fab fa-twitter"></i>
							Twitter
						</SocialIcon>
						<SocialIcon href="#">
							Linkedin
							<i className="fab fa-linkedin"></i>
						</SocialIcon>
						<SocialIcon href="#">
							Email
							<i className="fab fa-github"></i>
						</SocialIcon>
						<SocialIcon href="#">
							TikTok
							<i className="fab fa-github"></i>
						</SocialIcon>
					</SocialIcons>
				</FooterContent>
                </Container>
			</FooterContainer>
		</div>
	);
};

export default footerNew;
