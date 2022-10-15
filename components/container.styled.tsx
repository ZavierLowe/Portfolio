import React from 'react';
import styled from "styled-components";

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 140px;
	max-width: 1440px;

	@media (max-width: 425px) {
		max-width: 400px;
		padding: 0 40px;
	}

	@media (max-width: 768px) {
		max-width:700px;
		padding: 0 40px;
	}

	@media (max-width: 1024px) {
		max-width: calc(100% - 100px);
		padding: 0 40px;
	}
`;
