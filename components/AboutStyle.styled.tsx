import React from 'react';
import styled from "styled-components";


// interface marginProps {
// 	marginTop: string;
// }



export const AboutSection = styled.div`
<<<<<<< HEAD
	padding: 140px 100px;
=======
	padding: 140px 300px;
>>>>>>> 992b2b7659a1db9ab6b71dfe6870eb3d42a9d849

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
  font-weight: 800;

`
export const AboutText = styled.p`
	font-size: 20px;
	margin-top: 20px;
	font-weight: 300;
	line-height: 1.65rem;
	letter-spacing: 0.02rem;

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
