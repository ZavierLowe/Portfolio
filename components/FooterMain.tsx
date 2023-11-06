import React from "react";
import {
	FooterGrid,
	FooterHeading,
	FooterLinks,
	FooterWrapper,
	Footer,
	
} from "./Footer.styled";

const FooterMain = () => {
	return (
		<div>
			<Footer>
				<FooterWrapper>
					<FooterHeading>Tap in and Say Whats Up!</FooterHeading>
				</FooterWrapper>
			</Footer>
			<FooterGrid>
				<FooterLinks
					color="#214deb"
					borderLeft={"none"}
					borderTop={"1px solid #000000"}
					// href="https://www.linkedin.com/in/zavierlowe/"
					target="_blank">
					LinkedIn
				</FooterLinks>

				<FooterLinks
					color="#f94f28"
					borderTop={"none"}
					borderLeft={"1px solid #080808"}
					// href="mailto:zavier.lowe@gmail.com"
					target="_blank">
					Email
					
				</FooterLinks>
				<FooterLinks
					color="#dd4669"
					borderTop={"1px solid #f1ede4"}
					borderLeft={"1px solid #070707"}
					// href="https://www.tiktok.com/@zavierlowe"
					target="_blank">
					TikTok
				</FooterLinks>
<<<<<<< HEAD
				<FooterLinks
					color="#9436ec"
					borderTop={"1px solid #f1ede4"}
					borderLeft={"1px solid #000000"}>
					Instagram
				</FooterLinks>
				<FooterLinks
					color="#0b2ef1"
					borderTop={"1px solid #f1ede4"}
					borderLeft={"1px solid #000000"}>
					Twitter
				</FooterLinks>
=======
				
>>>>>>> 992b2b7659a1db9ab6b71dfe6870eb3d42a9d849
			</FooterGrid>
		</div>
	);
};

export default FooterMain;
