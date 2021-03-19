import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import Modal from "../Modal";
import { Header, Form } from "./Dashboard.styles";
import { Button, Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { IEDUCATION } from "../../Reducers/EducationReducer";
//styles

//
const EducationForm = () => {
	const { openEducationModal } = useReduxSelector((state) => state.modal);
	const { education } = useReduxSelector((state) => state);
	const dispatch = useReduxDispatch();
	const { register, handleSubmit } = useForm();
	const handleClose = () => dispatch({ type: "CLOSE_EDUCATION_MODAL" });
	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Header>Education</Header>
				</Grid>
				{education.map((edu: IEDUCATION) => (
					<Grid item xs={12}>
						{edu.degree}
					</Grid>
				))}
				<Grid item xs={12}>
					<button
						onClick={() =>
							dispatch({ type:"OPEN_EDUCATION_MODAL"})
						}>
						add
					</button>
				</Grid>
			</Grid>

			<Modal open={openEducationModal} close={handleClose}>
				<Form
					onSubmit={handleSubmit((data: IEDUCATION) =>
						dispatch({ type: "ADD_EDUCATION", payload: data })
					)}>
					<Grid container spacing={3} justify="flex-end">
						<Grid item xs={12}>
							<Header>Add Education</Header>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								name="institueName"
								label="Institution Name"
								inputRef={register}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								name="degree"
								label="degree"
								inputRef={register}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								variant="outlined"
								fullWidth
								name="startDate"
								label="From"
								inputRef={register}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								variant="outlined"
								fullWidth
								name="endDate"
								label="To"
								inputRef={register}
							/>
						</Grid>
						<Grid item>
							<Button
								variant="contained"
								onClick={() =>
									dispatch({ type: "CLOSE_EDUCATION_MODAL" })
								}>
								Cancel
							</Button>
						</Grid>
						<Grid item>
							<Button
								color="primary"
								variant="contained"
								type="submit">
								sumbit
							</Button>
						</Grid>
					</Grid>
				</Form>
			</Modal>
		</>
	);
};

export default EducationForm;
