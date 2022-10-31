
import styled from "styled-components";


interface BackgroundProps{
    backgroundColor:string;
    padding:string
}
interface HeadingProps{
    color:string;
}
interface WidthProps{
    width:string;
    margin:string
}




export const ProjectHeadingText = styled.h1 `
	font-family: "ClashDisplay-Variable", sans-serif;
    font-size: 72px;
    font-weight: 600;
    width: 900px;
    
	
	/* @media (max-width: 1024px) {
		display: flex;
	}
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 425px) {
		display: none;
	} */
`;

export const ProjectHeadingDiv = styled.div`
    
    padding: 140px 0px;
    
`
export const ProjectHeadingSection = styled.div<BackgroundProps>`
	background-color: ${(props) => props.backgroundColor};
    border-bottom: 1px solid white;
    /* border-top: 1px solid white; */
`;

export const ProjectHeadingDesc = styled.p`
	font-family: "ClashDisplay-Variable", sans-serif;
	font-size: 24px;
	letter-spacing: 0.05rem;
    width: 600px;
	margin-top: 12px;
    line-height: 1.2em;
`;

export const ProjectTextHeading = styled.h2`
	font-family: "ClashDisplay-Variable", sans-serif;
	font-size: 40px;
	font-weight: 600;
	color: ${(props) => props.color};
`;


export const ProjectTextDesc = styled.p`
	font-family: "ClashDisplay-Variable", sans-serif;
	font-size: 20px;
	margin-top: 12px;
    line-height: 1.3em;
    letter-spacing: .05rem;
    width: 800px;
`;

export const ProjectTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: stretch;
    padding: 80px 80px;
    margin: 0 auto;
`
export const ProjectTextSection = styled.div<BackgroundProps>`
	background-color: ${(props) => props.backgroundColor};
	padding: ${(props) => props.padding};
	/* display:flex ;
    justify-content: center; */
`;

export const ProjectGridImg = styled.div`
	display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 0px;
    padding: 0px 140px;
`;

export const ProjectGridImgDesc = styled.p`
    font-size: 14px;
    margin-top: 20px;
`

export const ProjectFlex = styled.div`
    display: flex;
   justify-content: center;
    margin-top: 12px;
`

export const ProjectImgWrapper = styled.div<WidthProps>`
	width: ${(props) => (props.width ? props.width : "auto")};
	margin:${(props => props.margin )};
   
	
`;

