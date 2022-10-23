import React from 'react';
import styled from "styled-components";

export const Navigation = styled.nav`
	font-family: "ClashDisplay-Variable", sans-serif;
	padding: 24px 72px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #f1ede4;
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
	&:hover {
		color: #ec5d4d;
		transition: all 0.2s;
	}
	@media (max-width: 425px) {
		display: inline-block;
	}
`;

export const NavItem = styled.li`
  margin: 0 12px;

`

export const NavLink = styled.a`
	color: #f1ede4;
	text-decoration: none;
	&:hover {
		color: #ec5d4d;
		transition: all 0.2s;
	}
`;



