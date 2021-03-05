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
	previewBackground: "#ECF4EF",
};

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}
`;
