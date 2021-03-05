import Dashboard from "../Components/Dashboard";
import Preview from "../Components/Preview";
import { CustomizeContainer } from "./Customize.styles";
const Customize: React.FC = () => {
	return (
		<CustomizeContainer>
			<Dashboard />
			<Preview />
		</CustomizeContainer>
	);
};
export default Customize;
