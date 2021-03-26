import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import { Header } from "./Dashboard.styles";
import { Grid } from "@material-ui/core";
import { IEDUCATION } from "../../Reducers/EducationReducer";
import EducationFormModal from "../Modals/EducationFormModal";
import { useState } from "react";
const Education = () => {
	const [edit, setEdit] = useState<{
		editMode: boolean;
		editValues?: IEDUCATION;
		index?: number;
	}>({
		editMode: false,
	});
	const { education } = useReduxSelector((state) => state);
	const dispatch = useReduxDispatch();
	const handleADD = () => {
		setEdit({ editMode: false });
		dispatch({ type: "OPEN_EDUCATION_MODAL" });
	};
	const handleDelete = (edu: IEDUCATION) =>
		dispatch({ type: "DELETE_EDUCATION", payload: edu });
	const handleEdit = (edu: IEDUCATION, index: number) => {
		setEdit({
			editMode: true,
			editValues: edu,
			index: index,
		});
		dispatch({ type: "OPEN_EDUCATION_MODAL" });
	};

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Header>Education</Header>
				</Grid>
				{education.map((edu: IEDUCATION, index: number) => (
					<Grid item xs={12} key={edu.degree}>
						{edu.degree}
						<button onClick={() => handleDelete(edu)}>
							delete
						</button>
						<button onClick={() => handleEdit(edu, index)}>
							edit
						</button>
					</Grid>
				))}
				<Grid item xs={12}>
					<button onClick={handleADD}>add</button>
				</Grid>
			</Grid>
			{edit.editMode ? (
				<EducationFormModal
					editValues={edit.editValues}
					index={edit.index}
				/>
			) : (
				<EducationFormModal />
			)}
		</>
	);
};

export default Education;
