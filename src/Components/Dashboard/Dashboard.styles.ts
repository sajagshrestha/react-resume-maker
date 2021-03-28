import styled from "styled-components";

export const DashboardContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${(props) => props.theme.background};
	box-shadow: 4px 40px 30px rgba(0, 0, 0, 0.11);
	z-index: 2;
	overflow-y: scroll;
`;
export const Content = styled.div`
	width: 80%;
	margin-top: 5rem;
	margin-inline: auto;
`;
export const Header = styled.h1`
	color: ${(props) => props.theme.primaryText};
	font-family: ${(props) => props.theme.headerFont};
`;
