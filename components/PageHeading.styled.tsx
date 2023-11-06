import React from 'react';
import styled from "styled-components";

export const PageHeadingTop= styled.div`
  border-bottom: 1px solid #090909;

`

export const PageHeadingText = styled.div`
	padding: 140px 0px;
	@media (max-width: 425px) {
	padding:80px 0px;
	}
`;

export const PageHeader = styled.h1`
	font-family: "ClashDisplay-Variable", sans-serif;
	color: #040404;
	font-size: 72px;
	font-weight: 700;
	@media (max-width: 425px) {
		font-size: 48px;
	}
`;

export const PageDescription = styled.p`
	font-family: "ClashDisplay-Variable", sans-serif;
	color: #000000;
	font-size: 24px;
	font-weight: 400;
	margin-top: 20px;
	line-height: 1.2em;
	width: 800px;
	@media (max-width: 425px) {
		width: 375px;
		font-size: 20px;
	}
`;


