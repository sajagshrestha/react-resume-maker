import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import { IPROJECT } from "../../Reducers/ProjectReducer";
import Modal from "./Modal";

const ProjectFormModal: React.FC<{ editValues?: IPROJECT }> = ({
	editValues,
}) => {
	const { openProjectModal } = useReduxSelector((state) => state.modal);
	const dispatch = useReduxDispatch();
	const handleClose = () => dispatch({ type: "CLOSE_PROJECT_MODAL" });
	return (
		<Modal open={openProjectModal} close={handleClose}>
			<div></div>
		</Modal>
	);
};

export default ProjectFormModal;
