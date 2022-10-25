import React from 'react';
import styled from "styled-components";


interface ColorStyle{
  color:string;
}

export const HighlightStyled= styled.span`
  color: ${props => props.color};
  font-weight: 600;
  &:hover{
    text-decoration:underline;
    transition: all .5s ease-in-out;
  }

`



export const HighlightStyledName = styled.span`
	color: #f1ede4;
	display: inline-block;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #ec5d4d;
		transform-origin: bottom left;
		transition: transform 0.3s ease-out;
	}
	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}
	&:hover {
		color: ${(props) => props.color};
	}
`;
