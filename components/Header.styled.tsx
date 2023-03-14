import React from 'react';
import styled from "styled-components";

export const Navigation = styled.nav`
	font-family: "Switzer-variable", sans-serif;
	padding: 24px 24px;
	display: flex;
	justify-content: space-between;
	align-items:center;
	background-color: #149414;
	border-bottom: 1px solid #090909;
	position: fixed;
	top:0;
	right:0;
	left:0;
	/* height: 40px; */
    /* width: 100%; */
	z-index:100;
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
	font-size: 24px;
	font-weight:400;
	color: #f1ede4;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		color: #ec5d4d;
		transition: all 0.2s;
	}
`;
export const NavLinks= styled.div`
  display: flex;
  font-size: 20px;
  color: #f1ede4;
  font-weight:200;
  text-decoration: none;
  @media (max-width:425px) {
    display: block;
    
  }
`
export const NavItems = styled.ul`
	display: flex;
	margin-left: 16px;
	cursor: pointer;
	text-decoration: none;
	font-weight:300;
	&:hover {
		color: #f97a04;
		transition: all 0.2s;
	}
	@media (max-width: 425px) {
		display: inline-block;
	}
`;



export const NavLink = styled.a`
	color: #f1ede4;
	text-decoration: none;
	font-weight:300;
	&:hover {
		color: #f97a04;
		transition: all 0.2s;
	}
`;



