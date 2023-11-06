import React from 'react';
import styled from "styled-components";


export const Button = styled.button`
	background: white;
	color: #080808;
	cursor: pointer;
	font-size: 20px;
	font-weight: 500;
	padding: 0 20px;
	width: 220px;
	height: 60px;
	transition: all 0.5s;
	border: 1px solid #0a0a0a;
	border-radius: 50px;
	position: relative;
	margin-top: 20px;

	&::before {
		content: "";

		background-image: url(https://cdn.shopify.com/s/files/1/0417/0026/2045/t/247/assets/button-arrow.svg);

		position: absolute;
		left: 30px;
		top: 21.5px;
		right: 5%;
		bottom: 0;
		opacity: 0;
		width: 16px;
		height: 16px;
	}

	&:hover {
		background: #6817d1;
		transition: all 0.5s;
		color: #fefefe;
		padding-right: 10px;
		padding-left: 40px;
		margin-right: -12px;
		width: 240px;

		&::before {
			opacity: 1;
			transition: all 0.5s;
		}
	}
`;


