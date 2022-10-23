import React from 'react';
import styled from "styled-components";


interface ColorStyle{
  color:string;
}

export const HighlightStyled= styled.span`
  color: ${props => props.color};
  font-weight: 600;

`
