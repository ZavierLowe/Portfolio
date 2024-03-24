import styled from "styled-components";






export const Grain: any = styled.div`
	z-index: -2;

	background-image: repeating-radial-gradient(
		circle at 17% 32%,
		white,
		black 0.00085px
	);
	animation: tv-static 5s linear infinite;
	&::before {
		opacity: 0.02;
        z-index: -3;
	}

	@keyframes tv-static {
		from {
			background-size: 100% 100%;
		}

		to {
			background-size: 200% 200%;
		}
	}
`;