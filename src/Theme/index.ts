import { createGlobalStyle, DefaultTheme } from "styled-components";
declare module "styled-components" {
	export interface DefaultTheme {
		background: string;
		primaryText: string;
		previewBackground: string;
		headerFont: string;
		backdropBackground: string;
		shadowHeavy: string;
		shadowLight: string;
	}
}

export const theme: DefaultTheme = {
	background: "#fff",
	primaryText: "#5C5C5C",
	previewBackground: "#F5F5F5",
	headerFont: `'Poppins', sans-serif`,
	backdropBackground: "rgba(0, 0, 0, 0.45)",
	shadowHeavy: "4px 40px 30px rgba(0, 0, 0, 0.11)",
	shadowLight: "4px 10px 10px rgba(0, 0, 0, 0.11);",
};

export const GlobalStyle = createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}
`;
