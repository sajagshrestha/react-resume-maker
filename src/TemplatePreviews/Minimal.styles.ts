import styled from "styled-components";

export const MinimalContainer = styled.div`
	width: 8.5in;
	height: 11in;
	background-color: ${(props) => props.theme.background};
	overflow: hidden;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
`;
