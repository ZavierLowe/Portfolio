import React from 'react';
import styled from "styled-components";

export const Container:any = styled.div`
	margin: 0 auto;
	padding: 0 115px;
	max-width: 1400px;

	@media (max-width: 428px) and (min-width: 320px) {
		max-width: 400px;
		padding: 0 20px;
	}

	/* @media (min-width: 768px) {
		max-width:700px;
		padding: 0 40px;
	}

	@media (max-width: 2560px) and (min-width: 1024px) {
		max-width: calc(100% - 500px);
		padding: 0 40px;
	} */
`;
