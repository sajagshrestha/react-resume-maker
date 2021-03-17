import { useReduxSelector } from "../Reducers";
import { MinimalContainer } from "./Minimal.styles";

const Minimal: React.FC = () => {
	const {
		firstName,
		lastName,
		email,
		github,
		phone,
		summary,
	} = useReduxSelector((state) => state.personalInformation);
	return (
		<MinimalContainer>
			{firstName} {lastName} {email} {github} {phone} {summary}
		</MinimalContainer>
	);
};
export default Minimal;
