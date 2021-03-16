import { Content, DashboardContainer } from "./Dashboard.styles";
import PIForm from "./DashboardForms/PIForm";
const Dashboard: React.FC = () => {
	return (
		<DashboardContainer>
			<Content>
				<PIForm />
			</Content>
		</DashboardContainer>
	);
};
export default Dashboard;
