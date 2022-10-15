import React from "react";
import styled from "styled-components";

export const PlaygroundGridMain = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 60px;
	margin-top: 140px;
	margin-bottom: 120px;
	@media (max-width:428px){
		margin: 80px 0px;
		grid-template-columns: 1fr;
		grid-row-gap: 20px;
	}
	
`;
export const PlaygroundWrapper = styled.div`
	width: 100%;
  object-fit: cover;
`;
