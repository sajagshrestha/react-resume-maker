import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import { IPROJECT } from "../../Reducers/ProjectReducer";
import Modal from "./Modal";
import { Form, FormTitle } from "./Modal.styles";
import { useForm } from "react-hook-form";
import { Grid, TextField, Button } from "@material-ui/core";
import { nanoid } from "nanoid";
const ProjectFormModal: React.FC<{ editValues?: IPROJECT }> = ({
	editValues,
}) => {
	const defaultValues: IPROJECT = editValues
		? editValues
		: {
				title: "",
				description: "",
				repoLink: "",
				demoLink: "",
		  };
	const { openProjectModal } = useReduxSelector((state) => state.modal);
	const dispatch = useReduxDispatch();
	const { register, handleSubmit } = useForm<IPROJECT>();
	const handleClose = () => dispatch({ type: "CLOSE_PROJECT_MODAL" });
	const onAdd = (data: IPROJECT) => {
		let id = nanoid();
		let dataWithId = { ...data, id: id };
		dispatch({ type: "ADD_PROJECT", payload: dataWithId });
	};
	const onSave = (data: IPROJECT) => {
		let id = editValues?.id;
		let dataWithID = { ...data, id: id };
		dispatch({ type: "EDIT_PROJECT", payload: dataWithID });
	};
	return (
		<Modal open={openProjectModal} close={handleClose}>
			<Form onSubmit={handleSubmit(editValues ? onSave : onAdd)}>
				<Grid container spacing={5} justify="flex-end">
					<Grid item xs={12}>
						<FormTitle>Add Education</FormTitle>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							fullWidth
							name="title"
							label="Project title"
							defaultValue={defaultValues.title}
							inputRef={register}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							fullWidth
							name="description"
							label="Description"
							inputRef={register}
							defaultValue={defaultValues.description}
							multiline
							rows={4}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							fullWidth
							name="repoLink"
							label="Link to repo"
							inputRef={register}
							defaultValue={defaultValues.repoLink}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							fullWidth
							name="demolink"
							label="Link to a Demo"
							inputRef={register}
							defaultValue={defaultValues.demoLink}
						/>
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							onClick={() =>
								dispatch({ type: "CLOSE_PROJECT_MODAL" })
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

export default ProjectFormModal;
