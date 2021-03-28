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
interface Props {
	data: PERSONALDATA;
}
const MinimalPDF: React.FC<Props> = ({ data }) => {
	return (
		<Document>
			<Page style={styles.page}>
				<View style={styles.personalInfoContainer}>
					<View style={styles.PIWrapper}>
						<View style={styles.nameContainer}>
							<Text style={styles.name}>{data.firstName}</Text>
							<Text style={styles.name}>{data.lastName}</Text>
						</View>
						<View style={styles.linkContainer}>
							{data.email === "" ? (
								<Text></Text>
							) : (
								<View style={styles.links}>
									<Link
										style={styles.link}
										src={`mailto:${data.email}`}>
										{data.email}
									</Link>
									<Link src={`mailto:${data.email}`}>
										<Image
											style={styles.img}
											src="/mail.png"
										/>
									</Link>
								</View>
							)}
							{data.github === "" ? (
								<Text></Text>
							) : (
								<View style={styles.links}>
									<Link style={styles.link} src={data.github}>
										{data.github}
									</Link>
									<Link src={data.github}>
										<Image
											style={styles.img}
											src="/github.png"
										/>
									</Link>
								</View>
							)}

							{data.phone === "" ? (
								<Text></Text>
							) : (
								<View style={styles.links}>
									<Text style={styles.link}>
										{data.phone}
									</Text>
									<Image
										style={styles.img}
										src="/phone.png"
									/>
								</View>
							)}
						</View>
					</View>
				</View>
				<View style={styles.body}>
					<View>
						<Text style={styles.title}>ABOUT ME</Text>
						<Text style={styles.content}>{data.summary}</Text>
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
	body: {
		padding: "4% 10%",
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
	img: {
		height: "14x",
		width: "14px",
	},

	page: {
		padding: 0,
		margin: 0,
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
		padding: "0 10%",
		height: "20%",
		backgroundColor: "#F2F2F2",
		alignItems: "center",
		justifyContent: "center",
	},
	PIWrapper: {
		width: "100%",
		height: "80%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
