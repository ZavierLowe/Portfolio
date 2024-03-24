import React from 'react';
import styled, { IStyledComponent } from "styled-components";

export const Navigation: any = styled.nav`
	font-family: "ClashDisplay-variable", sans-serif;
	color: #f6eee5;
	background-color: rgba(20, 20, 20, 0.6);
	backdrop-filter: blur(130px);
	box-shadow: 0px 4px 16px 6px rgba(0, 0, 0, 0.25);
	z-index: 1000;
	position: fixed;
	top: 20px;
	left: 0;
	right: 0;
	margin: 0 auto;
	width: 80%;
	padding: 24px 24px;
	display: flex;
	justify-content: space-between;
	border-radius: 10px;
	border: 0.5px solid #353535;
	@media (max-width: 1024px) {
		display: flex;
	}
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 425px) {
		display: none;
	}
`;
export const Logo = styled.h2`
	font-size: 20px;
	font-weight: 300;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		color: #7926e6;
		text-decoration: underline;
		transition: all 0.3s;
	}
`;
export const NavLinks = styled.div`
	display: flex;
	font-size: 18px;
	font-weight: 500;
	text-decoration: none;

	@media (max-width: 425px) {
		display: block;
	}
`;
export const NavItems = styled.ul`
	display: flex;
	margin-left: 16px;
	cursor: pointer;
	text-decoration: none;
	font-weight:300;
	&:hover {
		color: #a421fb;
		transition: all 0.2s;
	}
	@media (max-width: 425px) {
		display: inline-block;
	}
`;



export const NavLink = styled.a`
	text-decoration: none;
	color: #f6eee5;
	font-weight: 300;
	&:hover {
		color: #7926e6;
		text-decoration: underline;
		transition: all 0.3s;
	}
`;



