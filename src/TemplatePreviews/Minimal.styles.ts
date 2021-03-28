import styled from "styled-components";

export const MinimalContainer = styled.div`
	width: 8.5in;
	height: 11in;
	padding: 5%;
	background-color: ${(props) => props.theme.background};
	overflow: hidden;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
`;

export const PersonalInfoContainer = styled.div`
	height: 20%;
	.name {
		font-size: 2.7rem;
		font-family: "Montserrat", sans-serif;
		font-weight: 500;
		text-transform: uppercase;
	}
`;
