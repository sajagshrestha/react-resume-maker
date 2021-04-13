import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import { Header } from "./Dashboard.styles";
import { Grid } from "@material-ui/core";
import AddButton from "../shared/AddButton";
import ProjectFormModal from "../Modals/ProjectFormModal";
import { useState } from "react";
import { IPROJECT } from "../../Reducers/ProjectReducer";
const Project = () => {
	const [edit, setEdit] = useState<{
		editMode: boolean;
		editValues?: IPROJECT;
	}>({
		editMode: false,
	});
	const { projects } = useReduxSelector((state) => state);
	const dispatch = useReduxDispatch();
	const handleAdd = () => {
		setEdit({ editMode: false });
		dispatch({ type: "OPEN_PROJECT_MODAL" });
	};
	const handleDelete = (project: IPROJECT) => {
		dispatch({ type: "DELETE_PROJECT", payload: project });
	};
	const handleEdit = (project: IPROJECT) => {
		setEdit({
			editMode: true,
			editValues: project,
		});
		dispatch({ type: "OPEN_PROJECT_MODAL" });
	};

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Header>Projects</Header>
				</Grid>
				{projects.map((project: IPROJECT) => (
					<Grid item xs={12} key={project.id}>
						{project.title}

						<button onClick={() => handleDelete(project)}>
							delete
						</button>
						<button onClick={() => handleEdit(project)}>
							edit
						</button>
					</Grid>
				))}
				<Grid item xs={4}>
					<AddButton onClick={handleAdd} />
				</Grid>
			</Grid>
			{edit.editMode ? (
				<ProjectFormModal editValues={edit.editValues} />
			) : (
				<ProjectFormModal />
			)}
		</>
	);
};

export default Project;
