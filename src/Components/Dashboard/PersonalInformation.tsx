import { Grid, TextField } from "@material-ui/core";
import { ChangeEvent } from "react";
import { useReduxSelector, useReduxDispatch } from "../../Reducers";
import { Header } from "./Dashboard.styles";

const PersonalInformation = () => {
	const {
		firstName,
		lastName,
		github,
		email,
		phone,
		summary,
	} = useReduxSelector((state) => state.personalInformation);
	const dispatch = useReduxDispatch();
	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const event = e.target;
		dispatch({
			type: "ADD_PERSONAL_DATA",
			name: event.name,
			value: event.value,
		});
	};
	return (
		<form>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Header>About Yourself</Header>
				</Grid>

				<Grid item xs={6}>
					<TextField
						variant="outlined"
						fullWidth
						name="firstName"
						label="First Name"
						value={firstName}
						onChange={handleChange}
						placeholder="John"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						variant="outlined"
						fullWidth
						name="lastName"
						label="Last Name"
						value={lastName}
						onChange={handleChange}
						placeholder="Doe"
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						variant="outlined"
						fullWidth
						name="email"
						label="Email"
						value={email}
						onChange={handleChange}
						placeholder="jonDoe@gmail.com"
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						variant="outlined"
						fullWidth
						name="phone"
						label="Phone"
						value={phone}
						onChange={handleChange}
						placeholder="9861233111"
					/>
				</Grid>
				<Grid item xs={8}>
					<TextField
						variant="outlined"
						fullWidth
						name="github"
						label="Github"
						value={github}
						onChange={handleChange}
						placeholder="github.com/sajagshrestha"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						fullWidth
						name="summary"
						label="Summary"
						value={summary}
						onChange={handleChange}
						placeholder="Few lines about yourself"
						multiline
						rows={4}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default PersonalInformation;
