import React from "react";
import styled from "styled-components";


export const BottomNav = styled.nav`
	background-color: #0c0c0ce9;
	opacity: 0.97;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	overflow: hidden;
	padding: 24px 8px;
	z-index: 1000000;
	border-top: 1px solid;
	@media (min-width: 425px) {
		display: flex;
	} 
	@media (max-width: 768px) {
		display: inline-block;
	}

	@media (min-width:834px){
		display:none;
	}
	
	@media (min-width:820px){
		display:none;
	}

	@media (min-width: 1024px) {
		display: none;
	}
	@media (min-width: 1440px) {
		display: none;
	} 
`;

export const BottomNavWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

`

export const BottomNavLinks = styled.a`
	font-size: 12px;
	font-weight: 600;
	text-decoration: none;
	color: #f1ede4;
`;