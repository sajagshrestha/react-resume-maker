import {
	Document,
	Page,
	Text,
	StyleSheet,
	Font,
	View,
	Link,
	Image,
} from "@react-pdf/renderer";
import { PERSONALDATA } from "../Reducers/PersonalInformationReducer";
import { ISKILL } from "../Reducers/SkillsReducer";
interface Props {
	personalInfo: PERSONALDATA;
	skills: ISKILL[];
}
const MinimalPDF: React.FC<Props> = ({ personalInfo, skills }) => {
	return (
		<Document>
			<Page style={styles.page}>
				<View style={styles.personalInfoContainer}>
					<View style={styles.PIWrapper}>
						<View style={styles.nameContainer}>
							<Text style={styles.name}>
								{personalInfo.firstName}
							</Text>
							<Text style={styles.name}>
								{personalInfo.lastName}
							</Text>
						</View>
						<View style={styles.linkContainer}>
							{personalInfo.email === "" ? (
								<Text></Text>
							) : (
								<View style={styles.links}>
									<Link
										style={styles.link}
										src={`mailto:${personalInfo.email}`}>
										{personalInfo.email}
									</Link>
									<Link src={`mailto:${personalInfo.email}`}>
										<Image
											style={styles.img}
											src="/mail.png"
										/>
									</Link>
								</View>
							)}
							{personalInfo.github === "" ? (
								<Text></Text>
							) : (
								<View style={styles.links}>
									<Link
										style={styles.link}
										src={personalInfo.github}>
										{personalInfo.github}
									</Link>
									<Link src={personalInfo.github}>
										<Image
											style={styles.img}
											src="/github.png"
										/>
									</Link>
								</View>
							)}

							{personalInfo.phone === "" ? (
								<Text></Text>
							) : (
								<View style={styles.links}>
									<Text style={styles.link}>
										{personalInfo.phone}
									</Text>
									<Image
										style={styles.img}
										src="/phone.png"
									/>
								</View>
							)}
						</View>
					</View>
					<Text style={styles.summary}>{personalInfo.summary}</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.title}>Skills</Text>
					<View style={styles.skills}>
						{skills.map((skill) => (
							<Text key={skill.id} style={styles.skill}>
								{skill.skill}
							</Text>
						))}
					</View>
				</View>
			</Page>
		</Document>
	);
};

export default MinimalPDF;

Font.register({
	family: "Archivo",
	fonts: [
		{
			src:
				"https://fonts.gstatic.com/s/archivo/v8/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTNDNp8A.ttf",
		},
		{
			src:
				"https://fonts.gstatic.com/s/archivo/v8/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTT0zRp8A.ttf",
			fontWeight: 500,
		},
	],
});
Font.register({
	family: "Open Sans",
	src: "https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-U1Ug.ttf",
});
const styles = StyleSheet.create({
	section: {
		margin: "2% 0",
		padding: "2% 0",
	},

	title: {
		fontFamily: "Archivo",
		marginBottom: "1%",
	},
	content: {
		color: "#484848",
		fontSize: 11,
		fontFamily: "Open Sans",
	},
	skills: {
		flexDirection: "row",
	},
	skill: {
		color: "#484848",
		fontSize: 10,
		fontFamily: "Open Sans",
		margin: "0 10",
	},
	summary: {
		color: "#484848",
		fontSize: 11,
		fontFamily: "Open Sans",
		margin: "10 0",
	},
	img: {
		height: "14px",
		width: "14px",
	},

	page: {
		padding: "0 10%",
	},
	linkContainer: {
		width: "auto",
	},
	links: {
		width: "100%",
		height: "20",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		fontFamily: "Open Sans",
	},
	link: {
		textDecoration: "none",
		color: "#484848",
		fontSize: 10,
		marginRight: 5,
	},
	nameContainer: {
		width: "auto",
		flexDirection: "column",
	},
	name: {
		fontSize: 30,
		textTransform: "uppercase",
		fontFamily: "Archivo",
	},
	personalInfoContainer: {
		paddingTop: "10%",
		flexDirection: "column",
		justifyContent: "center",
		borderBottom: "1",
		borderBottomColor: "#484848",
	},
	PIWrapper: {
		width: "100%",

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
