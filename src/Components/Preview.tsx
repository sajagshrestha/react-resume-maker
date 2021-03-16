import { useRef } from "react";
import Minimal from "../TemplatePreviews/Minimal";
import { DragableCotainer, PreviewContainer } from "./Preview.styles";
const Preview: React.FC = () => {
	//to limit the drag of resume
	const constraintsRef = useRef(null);
	return (
		<PreviewContainer ref={constraintsRef}>
			<DragableCotainer
				drag
				dragMomentum={false}
				dragElastic={1}
				dragConstraints={constraintsRef}
				initial={false}
				animate={{
					scale: 0.7,
				}}
				// animate={{
				// 	scale: scale,
				// 	...(reset
				// 		? {
				// 				x: 0,
				// 				y: 0,
				// 		  }
				// 		: {}),
				// }}>
			>
				<Minimal />
			</DragableCotainer>
		</PreviewContainer>
	);
};

export default Preview;
