// Import necessary dependencies
import React from "react";
import styled from "styled-components";

// Define the Styled Components for your footer
export const FooterContainer = styled.footer`
	background-color: #f6eee5;
	border-top: 1px solid #000000;

	padding: 60px 0;
`;

export const FooterHeading = styled.h4`
	font-size: 42px;
	color: #040404;
	width: 1200px;
	font-weight: 500;
	line-height: 5.5rem;
`;

export const FooterContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1200px;
    margin-top: 40px;
	
`;

export const FooterText = styled.p`
	font-size: 24px;
`;

export const SocialIcons = styled.div`
	display: flex;
	gap: 20px;
`;

export const SocialIcon = styled.a`
	color: #000000;
	text-decoration: none;
	font-weight: 500;
	font-size: 20px;
	letter-spacing: 1.6px;

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #501cf9;
		transform-origin: bottom left;
		transition: transform 0.4s ease-in-out;
	}

	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
		cursor: pointer;
		transition: all 0.4s ease-in-out;
	}

	&:hover {
		transform: scaleX(1);
		transform-origin: bottom left;
		cursor: pointer;
		transition: all 0.4s ease-in-out;
		color: #7926e6;
		transition: all 0.4s;
		opacity: 1;
	}
`;
