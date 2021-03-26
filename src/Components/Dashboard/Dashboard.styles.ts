import styled from "styled-components";

export const DashboardContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${(props) => props.theme.background};
	box-shadow: 4px 40px 30px rgba(0, 0, 0, 0.11);
	z-index: 2;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 20px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: red;
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #b30000;
	}
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
