import React from "react";
import styled from "styled-components";

export const PlayGroundSection = styled.section`
	padding: 80px 0;
	border-top: 1px solid #f1ede4;
`;
export const PlayGroundContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
export const PlayGroundHeading = styled.h1`
	font-family: "ClashDisplay-Variable", sans-serif;
	font-size: 42px;
	color: #f1ede4;
	font-weight: 700;
	letter-spacing: 1.6px;
`;

export const PlayGroundDescription = styled.p`
	font-family: "ClashDisplay-Variable", sans-serif;
	font-size: 20px;
	color: #f1ede4;
	margin-top: 20px;
	font-weight: 500;
`;

export const PlayGroundGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	// grid-template-rows: repeat(4, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 0;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	@media (max-width: 428px) {
		display: grid;
		grid-template-columns: 1fr;
		grid-row-gap:20px;
	}
`;

export const PlayGroundImg = styled.img`
	max-width: 100%;
	object-fit: contain;
	border-radius: 10px;
`;
