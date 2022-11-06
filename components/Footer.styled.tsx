import React from 'react';
import styled from "styled-components";

interface Border{
    borderLeft:string
	borderTop:string
}

export const Footer = styled.div`
	border-top: 1px solid #f1ede4;
	border-bottom: 1px solid #f1ede4;
	padding: 140px;
	@media (max-width: 425px) {
		padding: 120px 100px;
	}
`;

export const FooterWrapper= styled.div`
  display: flex;
  justify-content: center;

`

export const FooterHeading= styled.h1`
  font-family: "ClashDisplay-Variable",sans-serif;
  font-size: 72px;
  color: #f1ede4;
  font-weight: 700;
  text-align: center;
  width: 800px;
  @media(max-width:425px){
	font-size: 48px;
	width: 425px;
  }

`

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 0fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	justify-content: center;
	align-items: center;
	height: 150px;
	@media (max-width: 425px) {
		grid-template-columns: 1fr;
	}
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
export const FooterLinks = styled.a<Border>`
	font-size: 48px;
	font-weight: 500;
	color: #f1ede4;
	cursor: pointer;
	transition: all 0.2s;
	text-decoration: none;
	text-align: center;
	border-left: ${(props) => props.borderLeft};
	padding: 80px 0px;
	&:hover {
		color: #ec5d4d;
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




