import styled from "styled-components";

export const MinimalContainer = styled.div`
	width: 8.5in;
	height: 11in;
	padding: 0% 10%;
	background-color: ${(props) => props.theme.background};
	overflow: hidden;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12);
`;

export const PersonalInfoContainer = styled.div`
	padding-top: 10%;

	border-bottom: 2px solid #484848;
	.pi-wrapper {
		display: flex;
		justify-content: center;
	}
	.summary {
		color: #484848;
		margin: 12px 0;
		font-family: ${(props) => props.theme.openSans};
	}
`;

export const NameContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.name {
		font-size: 2.5rem;
		text-transform: uppercase;
		font-family: ${(props) => props.theme.archivo};
	}
`;
export const LinkContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	.link {
		font-family: "Open Sans", sans-serif;
		color: #484848;
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			margin-left: 5px;
			height: 16px;
			width: 16px;
		}
	}
`;
export const Section = styled.div`
	margin: 2% 0;
	padding: 2% 0;
`;
export const Skills = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	width: 90%;
	margin: auto;
	.skill {
		font-size: 1rem;
		font-family: ${(props) => props.theme.openSans};
		color: #484848;
		margin: 0.1rem 1.3rem 0 0;
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			margin-right: 0.3rem;
			height: 0.5rem;
			width: 0.5rem;
		}
	}
`;
export const Title = styled.h1`
	font-family: ${(props) => props.theme.archivo};
	font-size: 1.7rem;
	margin-bottom: 0.6rem;
`;
