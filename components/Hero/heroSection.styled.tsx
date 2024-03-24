import React from 'react';
import styled from "styled-components";

export const Hero = styled.div`
	height: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	padding: 120px 20px;
	@media (max-width: 428px) {
		max-width: 420px;
		height: 500px;
	}

	@media (max-width: 768px) {
		
		height: 500px;
	}
`;



export const HeroHeading = styled.h1`
	font-size: 5.7em;
	color: #121212;
	font-family: "ClashDisplay-Variable", sans-serif;
	font-weight: 600;
	text-transform: capitalize;
	line-height: 1.2em;
	text-align: center;

	@media (max-width: 428px) {
		font-size: 2.5em;
	}
`;

export const HeroDescription = styled.p`
	font-size:20px;
	font-weight: 400;
	line-height: 1.3em;
	letter-spacing: .04em;
	width: 70%;
	margin-top: 24px;
	text-align: center;

`


