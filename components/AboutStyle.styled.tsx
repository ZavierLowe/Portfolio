import React from 'react';
import styled from "styled-components";


// interface marginProps {
// 	marginTop: string;
// }



export const AboutSection = styled.div`
	padding: 140px 100px;

	@media (max-width: 425px) {
		padding: 40px 20px;
	}
	@media (max-width: 768px) {
		padding: 40px 20px;
	}
	@media (max-width: 1024px) {
		padding: 40px 0px;
	}
`;


export const AboutHeading= styled.h2`
font-size: 48px;
  font-weight: 600;

`
export const AboutText = styled.p`
	font-size: 20px;
	margin-top: 20px;
	font-weight: 400;
	line-height: 1.65rem;
	letter-spacing: 0.1rem;

	@media (max-width: 425px) {
		width: 100%;
	}
	@media (max-width: 768px) {
		width: 100%;
	}

	@media (min-width: 1024px) {
		width: 100%;
	}
`;
