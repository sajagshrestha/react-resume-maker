import { useReduxSelector } from "../Reducers";
import { MinimalContainer, PersonalInfoContainer } from "./Minimal.styles";

const Minimal: React.FC = () => {
	const {
		firstName,
		lastName,
		email,
		github,
		phone,
		summary,
	} = useReduxSelector((state) => state.personalInformation);
	const { education } = useReduxSelector((state) => state);
	return (
		<MinimalContainer>
			<PersonalInfoContainer>
				<h1 className="name">
					{firstName} {lastName}
				</h1>
			</PersonalInfoContainer>
			{email} {github} {phone} {summary}
			<div>
				{education.map((edu) => (
					<div key={edu.id}>
						{edu.instituteName}
						{edu.degree}
						{edu.startDate} - {edu.endDate}
					</div>
				))}
			</div>
		</MinimalContainer>
	);
};
export default Minimal;
