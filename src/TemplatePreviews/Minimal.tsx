import { useReduxSelector } from "../Reducers";
import {
	MinimalContainer,
	PersonalInfoContainer,
	NameContainer,
	LinkContainer,
} from "./Minimal.styles";

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
				<div className="pi-wrapper">
					<NameContainer>
						<h1 className="name">{firstName}</h1>
						<h1 className="name">{lastName}</h1>
					</NameContainer>
					<LinkContainer>
						<div className="link">
							<span>{email}</span>
							<img src="/mail.png" alt="" />
						</div>
						<div className="link">
							<span>{github}</span>
							<img src="/github.png" alt="" />
						</div>
						<div className="link">
							<span>{phone}</span>
							<img src="/phone.png" alt="" />
						</div>
					</LinkContainer>
				</div>

				<div className="summary">{summary}</div>
			</PersonalInfoContainer>

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
