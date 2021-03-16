import { useReduxSelector } from "../Reducers";
import { MinimalContainer } from "./Minimal.styles";

const Minimal: React.FC = () => {
	const { firstName, lastName } = useReduxSelector(
		(state) => state.personalInformation
	);
	return (
		<MinimalContainer>
			{firstName} {lastName}
		</MinimalContainer>
	);
};
export default Minimal;
