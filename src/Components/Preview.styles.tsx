import styled from "styled-components";
import { motion } from "framer-motion";

export const PreviewContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
	background-color: ${(props) => props.theme.previewBackground};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const DragableCotainer = styled(motion.div)`
	cursor: pointer;
`;
