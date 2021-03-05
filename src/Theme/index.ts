import { createGlobalStyle, DefaultTheme } from "styled-components";
declare module "styled-components" {
	export interface DefaultTheme {
		background: string;
		primaryText: string;
		previewBackground: string;
	}
}

export const theme: DefaultTheme = {
	background: "#fff",
	primaryText: "#5C5C5C",
	previewBackground: "#F5F5F5",
};

export const GlobalStyle = createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}
`;
