import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import { PERSONALDATA } from "../Reducers/PersonalInformationReducer";
interface Props {
	data: PERSONALDATA;
}
const MinimalPDF: React.FC<Props> = ({ data }) => {
	return (
		<Document>
			<Page>
				<Text style={styles.name}>
					{data.firstName} {data.lastName}
				</Text>
			</Page>
		</Document>
	);
};

export default MinimalPDF;

const styles = StyleSheet.create({
	name: {
		fontSize: 30,
		color: " red",
	},
});
