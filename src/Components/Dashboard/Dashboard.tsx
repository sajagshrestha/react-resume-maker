import { Grid } from "@material-ui/core";
import { Content, DashboardContainer } from "./Dashboard.styles";
import Education from "./Education";
import PIForm from "./PIForm";
const Dashboard: React.FC = () => {
	return (
		<DashboardContainer>
			<Content>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<PIForm />
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
