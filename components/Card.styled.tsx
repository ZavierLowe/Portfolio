import React from 'react';
import styled from "styled-components";

interface ColorProps{
    backgroundColor:string;
}

export const CardWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 10px;
	background-color: rgba(20, 20, 20, 0.8);
	box-shadow: 4px 4px 32px 10px rgba(20, 20, 20, 0.8) inset,
		0px 4px 61.5px 8px rgba(56, 56, 18, 0.25),
		0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(9.2px);
	-webkit-backdrop-filter: blur(9.2px);
	border: 1px solid #353535;
	transition: transform 0.2s;
	@media (max-width: 425px) {
		max-width: calc(100% -500px);
	}
	@media (max-width: 768px) {
		max-width: calc(100% -200px);
	}
	@media (max-width: 1024px) {
		max-width: calc(100% - 200px);
	}
	@media (max-width: 1440px) {
		max-width: calc(100% - 1px);
	}
`;


export const Card = styled.div<ColorProps>`
	background-color: ${(props) => props.backgroundColor};
	width: 700px;
	max-height: 100%;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	@media (max-width: 425px) {
		width: 200px;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
	@media (max-width: 1024px) {
		width: 100%;
	}
	@media (max-width: 1440px) {
		width: 100%;
	}
`;


export const CardText = styled.div`
	font-family: "ClashDisplay-Variable";
	max-width: 550px;
	margin-top: 24px;
	
	color: #f1ede4;
`;
export const CardHeading = styled.h2`
	font-family: "ClashDisplay-Variable";
	font-size: 24px;
	font-weight: 500;
	letter-spacing: 0.2rem;
	margin-top: 12px;
	@media (max-width: 425px) {
		font-size: 24px;
	}
`;
export const CardDescription = styled.p`
	font-family: "ClashDisplay-Variable";
	margin-top: 12px;
	font-size: 16px;
	font-weight: 200;
	line-height: 1.3rem;
	letter-spacing: 1.6px;
	@media (max-width: 425px) {
		font-size: 14px;
		width: 300px;
	}
`;

export const CardMeta = styled.span`
	font-family: "ClashDisplay-Variable";
	margin-top: 12px;
  	color: #787878;
	letter-spacing: 1.2px;
	font-size: 14px;
	@media (max-width: 425px) {
		font-size: 12px;
    
	}
`;





