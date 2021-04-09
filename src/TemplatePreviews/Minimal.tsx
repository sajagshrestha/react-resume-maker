import { useReduxSelector } from "../Reducers";
import {
	MinimalContainer,
	PersonalInfoContainer,
	NameContainer,
	LinkContainer,
	Section,
	Title,
	Skills,
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
	const { skills } = useReduxSelector((state) => state);
	return (
		<MinimalContainer>
			<PersonalInfoContainer>
				<div className="pi-wrapper">
					<NameContainer>
						<h1 className="name">{firstName}</h1>
						<h1 className="name">{lastName}</h1>
					</NameContainer>
					<LinkContainer>
						{email && (
							<div className="link">
								<span>{email}</span>
								<img src="/mail.png" alt="" />
							</div>
						)}
						{github && (
							<div className="link">
								<span>{github}</span>
								<img src="/github.png" alt="" />
							</div>
						)}
						{phone && (
							<div className="link">
								<span>{phone}</span>
								<img src="/phone.png" alt="" />
							</div>
						)}
					</LinkContainer>
				</div>

				<div className="summary">{summary}</div>
			</PersonalInfoContainer>
			<Section>
				<Title>SKILLS</Title>
				<Skills>
					{skills.map((skill) => (
						<div className="skill" key={skill.id}>
							<img src="/dot.png" alt="" />
							<span>{skill.skill}</span>
						</div>
					))}
				</Skills>
			</Section>

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
