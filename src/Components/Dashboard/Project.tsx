import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import { Header, List } from "./Dashboard.styles";
import { Grid } from "@material-ui/core";
import AddButton from "../shared/AddButton";
import ProjectFormModal from "../Modals/ProjectFormModal";
import { useState } from "react";
import { IPROJECT } from "../../Reducers/ProjectReducer";
import DeleteIconButton from "../shared/DeleteIconButton";
import EditIconButton from "../shared/EditIconButton";
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
				{projects.length !== 0 && (
					<Grid item xs={12}>
						<List>
							{projects.map((project: IPROJECT) => (
								<div className="items" key={project.id}>
									<h3>{project.title}</h3>
									<DeleteIconButton
										click={() =>
											handleDelete(project)
										}></DeleteIconButton>
									<EditIconButton
										click={() => handleEdit(project)}
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
				<ProjectFormModal editValues={edit.editValues} />
			) : (
				<ProjectFormModal />
			)}
		</>
	);
};

export default Project;
