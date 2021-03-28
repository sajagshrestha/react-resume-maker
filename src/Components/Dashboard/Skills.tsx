import { Grid, TextField, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { Header } from "./Dashboard.styles";
import { ChangeEvent, useState } from "react";
import { useReduxDispatch, useReduxSelector } from "../../Reducers";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { ISKILL } from "../../Reducers/SkillsReducer";
const SkillButton = styled(Button)`
	&& {
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
	}
`;
const Skills = () => {
	const { skills } = useReduxSelector((state) => state);
	const [skill, setSkill] = useState("");
	const dispatch = useReduxDispatch();
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSkill(e.target.value);
	};
	const handleAdd = () => {
		let id = nanoid();
		let skillWithId = {
			id: id,
			skill: skill,
		};
		dispatch({ type: "ADD_SKILL", payload: skillWithId });
		setSkill("");
	};
	const handleDelete = (skill: ISKILL) => {
		dispatch({ type: "DELETE_SKILL", payload: skill });
	};
	return (
		<Grid container spacing={2} alignItems="center">
			<Grid item xs={12}>
				<Header>Skills</Header>
			</Grid>
			<Grid item xs={8}>
				<TextField
					variant="outlined"
					fullWidth
					label="Skill"
					value={skill}
					onChange={handleChange}
					placeholder="React"
					size="medium"
				/>
			</Grid>
			<Grid item xs={4}>
				<Button color="primary" variant="contained" onClick={handleAdd}>
					Add
				</Button>
			</Grid>
			<Grid item xs={12}>
				{skills.map((skill) => (
					<SkillButton
						onClick={() => handleDelete(skill)}
						size="small"
						variant="outlined"
						endIcon={<ClearIcon />}>
						{skill.skill}
					</SkillButton>
				))}
			</Grid>
		</Grid>
	);
};

export default Skills;
