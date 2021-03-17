import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import Modal from "../Modal";
import { Header, Form } from "./Dashboard.styles";
import { Grid } from "@material-ui/core";
//styles

//
const EducationForm = () => {
	const { openEducationModal } = useReduxSelector((state) => state.modal);
	const dispatch = useReduxDispatch();
	const handleClose = () => dispatch({ type: "CLOSE_EDUCATION_MODAL" });
	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Header>Education</Header>
				</Grid>
				<Grid item xs={12}>
					<button
						onClick={() =>
							dispatch({ type: "OPEN_EDUCATION_MODAL" })
						}>
						add
					</button>
				</Grid>
			</Grid>

			<Modal open={openEducationModal} close={handleClose}>
				<Form>
					<Grid container spacing={3}>
						<Grid item xs={12}></Grid>
					</Grid>
				</Form>
			</Modal>
		</>
	);
};

export default EducationForm;
