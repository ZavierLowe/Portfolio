import React from 'react';
import styled from "styled-components";

interface Border{
    borderLeft:string
	borderTop:string
	color:string
}

export const Footer = styled.div`
	border-top: 1px solid #000000;
	/* border-bottom: 1px solid #000000; */
	padding: 80px ;
	@media (max-width: 425px) {
		padding: 120px 100px;
	}
`;

export const FooterWrapper= styled.div`
  display: flex;
  justify-content: left;
  padding: 10px;

`

export const FooterHeading= styled.h1`
  font-family: "ClashDisplay-Variable",sans-serif;
  font-size: 64px;
  color: #000000;
  font-weight: 700;
  text-align: center;
  /* width: 800px; */
  @media(max-width:425px){
	font-size: 48px;
	width: 425px;
  }

`

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 0fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	justify-content: center;
	align-items: center;
	height: 130px;
	margin-bottom: 10px;
	

	&:hover {
	}

	@media (max-width: 425px) {
		grid-template-columns: 1fr;
	}
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
export const FooterLinks = styled.a<Border>`
	font-family: "ClashDisplay-Variable", sans-serif;
	font-size: 32px;
	font-weight: 500;
	color: #000000;
	cursor: pointer;
	transition: all 0.2s;
	text-decoration: none;
	text-align: center;
	border-left: ${(props) => props.borderLeft};
	border-top: 1px solid black;
	padding: 60px;

	/* &::before {
		content: "";
		position: absolute;
		transform: scaleY(0);
		width: 8px;
		height: 100%;
		top:0;
		right: 0px;
		background-color: ${(props) => props.color};
		transform-origin: bottom left;
		transition: transform 0.2s ease-in-out;
	}

	&:hover::before {
		transform: scaleY(1);
		transform-origin:bottom right;
		cursor: pointer;
		transition: all 0.4s ease-in-out;
	}
	 */
	
	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		transform: scaleX(0);
		height: 8px;
		left: 0;
		bottom: 0;
		background-color: ${(props) => props.color};
		transform-origin: bottom left;
		transition: transform 0.2s ease-in-out;
	}

	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
		cursor: pointer;
		transition: all 0.4s ease-in-out;
	}

	&:hover {
		transform: scaleX(1);
		text-decoration: underline;
		transform-origin: bottom left;
		cursor: pointer;
		transition: all 0.4s ease-in-out;
		color: ${(props) => props.color};
		/* border-top: 2px solid ${(props) => props.color};
		border-right: 6px solid ${(props) => props.color}; */
		/* border-left:2px solid ${(props) => props.color}; */
		transition: all 0.4s ease-in-out;
		opacity: 1;
	}

	@media (max-width: 425px) {
		border-top: ${(props) => props.borderTop};
		border-left: none;
		width: 100%;
	}
	@media (max-width: 768px) {
		border-top: ${(props) => props.borderTop};
		border-left: none;
		width: 100%;
	}
`;




