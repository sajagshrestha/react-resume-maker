import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import { Header } from "./Dashboard.styles";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";
import AddButton from "../shared/AddButton";
import { IEDUCATION } from "../../Reducers/EducationReducer";
import EducationFormModal from "../Modals/EducationFormModal";
import { useState } from "react";
const Education = () => {
	const [edit, setEdit] = useState<{
		editMode: boolean;
		editValues?: IEDUCATION;
	}>({
		editMode: false,
	});
	const { education } = useReduxSelector((state) => state);
	const dispatch = useReduxDispatch();
	const handleAdd = () => {
		setEdit({ editMode: false });
		dispatch({ type: "OPEN_EDUCATION_MODAL" });
	};
	const handleDelete = (edu: IEDUCATION) => {
		dispatch({ type: "DELETE_EDUCATION", payload: edu });
	};
	const handleEdit = (edu: IEDUCATION) => {
		setEdit({
			editMode: true,
			editValues: edu,
		});
		dispatch({ type: "OPEN_EDUCATION_MODAL" });
	};

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Header>Education</Header>
				</Grid>
				<Grid item xs={12}>
					<List>
						{education.map((edu: IEDUCATION) => (
							<Grid item xs={12} key={edu.id}>
								<ListItem>
									<ListItemText primary={edu.degree} />
								</ListItem>
								<button onClick={() => handleDelete(edu)}>
									delete
								</button>
								<button onClick={() => handleEdit(edu)}>
									edit
								</button>
							</Grid>
						))}
					</List>
				</Grid>

				<Grid item xs={4}>
					<AddButton onClick={handleAdd} />
				</Grid>
			</Grid>
			{edit.editMode ? (
				<EducationFormModal editValues={edit.editValues} />
			) : (
				<EducationFormModal />
			)}
		</>
	);
};

export default Education;
