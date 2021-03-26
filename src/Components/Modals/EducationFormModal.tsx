import { Button, Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import { Form, FormTitle } from "./Modal.styles";
import { IEDUCATION } from "../../Reducers/EducationReducer";

const EducationFormModal: React.FC<{
	editValues?: IEDUCATION;
	index?: number;
}> = ({ editValues, index }) => {
	const defaultValues: IEDUCATION = editValues
		? editValues
		: {
				instituteName: "",
				degree: "",
				endDate: "",
				startDate: "",
		  };
	const { openEducationModal } = useReduxSelector((state) => state.modal);
	const { register, handleSubmit } = useForm<IEDUCATION>();
	const dispatch = useReduxDispatch();
	const handleClose = () => dispatch({ type: "CLOSE_EDUCATION_MODAL" });
	const onAdd = (data: IEDUCATION) =>
		dispatch({ type: "ADD_EDUCATION", payload: data });
	const onSave = (data: IEDUCATION) =>
		dispatch({ type: "EDIT_EDUCATION", payload: data, index: index });
	return (
		<Modal open={openEducationModal} close={handleClose}>
			<Form onSubmit={handleSubmit(editValues ? onSave : onAdd)}>
				<Grid container spacing={5} justify="flex-end">
					<Grid item xs={12}>
						<FormTitle>Add Education</FormTitle>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							fullWidth
							name="instituteName"
							defaultValue={defaultValues.instituteName}
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
							defaultValue={defaultValues.degree}
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							fullWidth
							name="startDate"
							label="From"
							defaultValue={defaultValues.startDate}
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
							defaultValue={defaultValues.endDate}
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
							{editValues ? "Save" : "Add"}
						</Button>
					</Grid>
				</Grid>
			</Form>
		</Modal>
	);
};
export default EducationFormModal;
