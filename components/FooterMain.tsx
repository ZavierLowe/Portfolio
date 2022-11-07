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
					<FooterHeading>Come Network and Say Whats Up</FooterHeading>
				</FooterWrapper>
			</Footer>
			<FooterGrid>
				<FooterLinks
					borderTop={"none"}
					borderLeft={"none"}
					href="mailto:zavier.lowe@gmail.com">
					Email
				</FooterLinks>
				<FooterLinks
					borderLeft={"1px solid #f1ede4"}
					borderTop={"1px solid #f1ede4"}
					href="https://www.linkedin.com/in/zavierlowe/"
					target="_blank">
					LinkedIn
				</FooterLinks>
				<FooterLinks
					borderTop={"1px solid #f1ede4"}
					borderLeft={"1px solid #f1ede4"}
					href="https://www.tiktok.com/@zavierlowe"
					target="_blank">
					TikTok
				</FooterLinks>
				<FooterLinks
					borderTop={"1px solid #f1ede4"}
					borderLeft={"1px solid #f1ede4"}>
					Instagram
				</FooterLinks>
			</FooterGrid>
		</div>
	);
};

export default FooterMain;
