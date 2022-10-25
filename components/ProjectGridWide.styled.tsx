import styled from "styled-components";


interface LinkProps{
	margin:string;
}


export const CardGridWide = styled.div`
	margin-top: 140px;
	margin-bottom: 140px;
`;

export const CardGridWideHeadingWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 12px 0px;
	opacity: 1;
	&:hover{
		opacity: 1;
	}
`;

export const CardGridWideHeading = styled.h1`
    
    font-size: 48px;
    font-weight: 600;
    letter-spacing: .2rem;
`
export const CardGridWideDesc = styled.p`
    
    font-size: 20px;
    font-weight: 400;
    margin: 12px 0px;
    letter-spacing: .1rem;
`;
export const CardGridWideMeta = styled.span`
	font-size: 14px;
	color: #787878;
	font-weight: 400;
	letter-spacing: 1.2px;
`;

export const ProjectDivider = styled.div`
	height: 1px;
	background-color: #f1ede4;
	margin: 20px 0px;
`;

export const ProjectIcon = styled.div`
	width: 42px;
	height: 42px;
	opacity: 0.25;
	&:hover {
		opacity: 1;
		
		transition: all 0.5s ease-out;
	}
`;

export const ProjectLinkWrapper = styled.a<LinkProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: white;
	filter: blur(0px);
	will-change: filter, opacity;
	opacity: 1;
	margin: ${(props) => props.margin};
	&:hover {
		opacity: 1;
		transition: all 0.3s ease-in-out;
		color: #f15c22;
		will-change: opacity;
	}
`;
