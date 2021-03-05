import styled from "styled-components";
import { theme } from "../Theme";

export const CustomizeContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background: ${(props) => theme.background};
	display: grid;
	grid-template-columns: 1fr 1fr;
`;
