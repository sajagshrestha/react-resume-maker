import React, { ReactChild, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
//styles
const ModalBackdrop = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100vw;
	height: 100vh;
	background: ${(props) => props.theme.backdropBackground};
	display: grid;
	place-items: center;
`;
const ModalContainer = styled.div`
	z-index: 1000;
	background: ${(props) => props.theme.background};
	width: auto;
	height: auto;
	padding: 3.2rem;
	box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.11);
`;
const ModalControl = styled.div`
	width: 100%;
	background: ${(props) => props.theme.background};
`;
//
//animations
const variants = {
	open: {
		opacity: 1,
	},
	closed: {
		opacity: 0,
	},
};
//
interface Props {
	children: ReactChild;
	open: boolean;
	close: () => void;
}
const Modal: React.FC<Props> = ({ children, open, close }) => {
	const modalRef = useRef(null);
	const closeModalOnOutsideClick = (e: React.MouseEvent) => {
		if (modalRef.current === e.target) {
			close();
		}
	};
	return ReactDOM.createPortal(
		<>
			{open ? (
				<ModalBackdrop
					ref={modalRef}
					onClick={closeModalOnOutsideClick}
					variants={variants}
					initial="closed"
					animate="open"
					transition={{ duration: 0.2 }}>
					<ModalContainer>
						{children}
						<ModalControl></ModalControl>
					</ModalContainer>
				</ModalBackdrop>
			) : null}
		</>,
		document.getElementById("portal")!
	);
};

export default Modal;
