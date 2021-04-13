import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import { Header, List } from "./Dashboard.styles";
import { Grid } from "@material-ui/core";
import AddButton from "../shared/AddButton";
import DeleteIconButton from "../shared/DeleteIconButton";
import EditIconButton from "../shared/EditIconButton";
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
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Header>Education</Header>
				</Grid>
				{education.length !== 0 && (
					<Grid item xs={12}>
						<List>
							{education.map((edu: IEDUCATION) => (
								<div className="items" key={edu.id}>
									<h3>{edu.degree}</h3>
									<DeleteIconButton
										click={() =>
											handleDelete(edu)
										}></DeleteIconButton>
									<EditIconButton
										click={() => handleEdit(edu)}
									/>
								</div>
							))}
						</List>
					</Grid>
				)}

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
