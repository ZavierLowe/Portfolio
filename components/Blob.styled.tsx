import styled from "styled-components";


interface BlobProps{
    top:string;
    left:string;
    bottom:string;
}



export const Blob: any = styled.div`
	width: 1058px;
	height: 1058px;
	border-radius: 300px;
	background: linear-gradient(
		120deg,
		rgba(226, 231, 126, 0.5) 20.00%,
		rgba(101, 117, 239, 0.651) 84.16%
	);
	filter: blur(100px);
	position: absolute;
	top: -600px;
	left: -800px;
	z-index: -10;

	&::before {
		content: "";
		position: relative;
		border-radius: 300px;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: inherit;
	}
`;