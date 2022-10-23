import React from 'react';
import styled from "styled-components";


export const Button = styled.button`
	background: transparent;
	color: #ffffff;
	cursor: pointer;
	font-size: 20px;
	font-weight: 500;
	font-weight: 600;
	padding: 0 20px;
	width: 240px;
	height: 60px;
	transition: all 0.5s;
	border: 1px solid #f1ede4;
	border-radius: 5px;
	position: relative;
	margin-top: 20px;

	&::before {
		content: "";

		background-image: url(https://cdn.shopify.com/s/files/1/0417/0026/2045/t/247/assets/button-arrow.svg);

		position: absolute;
		left: 30px;
		top: 22.5px;
		right: 5%;
		bottom: 0;
		opacity: 0;
		width: 16px;
		height: 16px;
	}

	&:hover {
		background: #ec5d4d;
		transition: all 0.5s;

		padding-right: 10px;
		padding-left: 40px;
		margin-right: -12px;
		width: 250px;

		&::before {
			opacity: 1;
			transition: all 0.5s;
		}
	}
`;


