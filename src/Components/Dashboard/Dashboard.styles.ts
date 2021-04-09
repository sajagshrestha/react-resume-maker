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

export const List = styled.div`
	display: grid;
	padding: 1rem;
	grid-row-gap: 1rem;
	border: 1px solid #cecece;
	.items {
		display: grid;
		grid-template-columns: 10fr 1fr 1fr;
		grid-column-gap: 0.5rem;
		align-items: center;
		justify-content: center;
		h3 {
			font-family: ${(props) => props.theme.openSans};
			font-size: 1rem;
			color: ${(props) => props.theme.secondaryText};
		}
	}
`;
