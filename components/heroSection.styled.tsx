import React from 'react';
import styled from "styled-components";

export const Hero = styled.div`
	height: 1000px;
	display: flex;
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
		max-width: calc(100px - 2px);
	}

	@media (max-width: 768px) {
		max-width: calc(100% - 25px);
	}
	@media (max-width: 1024px) {
		max-width: calc(100% - 25px);
	}
`;

export const HeroHeading = styled.h1`
	font-size: 6.75em;
	color: #f1ede4;
	font-family: "ClashDisplay-Variable", sans-serif;
	font-weight: 500;
	line-height: 1.2em;

	@media (max-width:428px){

		font-size:2.5em;
	}

`;


