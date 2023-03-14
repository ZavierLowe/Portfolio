import React from 'react';
import styled from "styled-components";

export const Hero = styled.div`
	height: 800px;
	display: flex;
	padding: 80px 40px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	@media (max-width: 428px) {
		max-width: 420px;
		height: 500px;
	}

	@media (max-width: 768px) {
		
		height: 500px;
	}
`;

export const HeroText = styled.div`
	display: flex;
	width: 100%;
	@media (max-width: 428px) {
		max-width: calc(100% - 2px);
	}

	@media (max-width: 768px) {
		max-width: calc(100% - 25px);
	}
	@media (max-width: 1024px) {
		max-width: calc(100% - 25px);
	}
`;

export const HeroHeading = styled.h1`
	font-size: 5.75em;
	/* color: #f1ede4; */
	font-family: "Switzer-Variable", ;
	font-weight:900;
	line-height: 1.1em;

	@media (max-width:428px){

		font-size:1.5em;
	}

`;


