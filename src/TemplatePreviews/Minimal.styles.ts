import styled from "styled-components";

export const MinimalContainer = styled.div`
	width: 400px;
	height: 600px;
	background-color: ${(props) => props.theme.background};
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
`;
