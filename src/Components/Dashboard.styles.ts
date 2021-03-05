import styled from "styled-components";

export const DashboardContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${(props) => props.theme.background};
	box-shadow: 4px 40px 30px rgba(0, 0, 0, 0.11);
	z-index: 999;
`;
