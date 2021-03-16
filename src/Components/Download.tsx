import { PDFDownloadLink } from "@react-pdf/renderer";
import { useReduxSelector } from "../Reducers";
import MinimalPDF from "../TemplatePdf/MinimalPDF";
import { DownloadContainer } from "./Download.styles";

const Download = () => {
	const { personalInformation } = useReduxSelector((state) => state);
	return (
		<DownloadContainer>
			<PDFDownloadLink
				document={<MinimalPDF data={personalInformation} />}>
				Download
			</PDFDownloadLink>
		</DownloadContainer>
	);
};

export default Download;
