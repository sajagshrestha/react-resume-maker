import { Grid } from "@material-ui/core";
import { Content, DashboardContainer } from "./Dashboard.styles";
import Education from "./Education";
import Project from "./Project";
import PersonalInformation from "./PersonalInformation";
import Skills from "./Skills";
const Dashboard: React.FC = () => {
	return (
		<DashboardContainer>
			<Content>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<PersonalInformation />
					</Grid>
					<Grid item xs={12}>
						<Skills />
					</Grid>
					<Grid item xs={12}>
						<Project />
					</Grid>
					<Grid item xs={12}>
						<Education />
					</Grid>
				</Grid>
			</Content>
		</DashboardContainer>
	);
};
export default Dashboard;
