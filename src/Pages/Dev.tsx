import { PDFViewer } from "@react-pdf/renderer";
import MinimalPDF from "../TemplatePdf/MinimalPDF";
import { useReduxSelector } from "../Reducers";

const Dev = () => {
	const { personalInformation } = useReduxSelector((state) => state);

	return (
		<div>
			<PDFViewer height="1200" width="1000">
				<MinimalPDF data={personalInformation} />
			</PDFViewer>
		</div>
	);
};

export default Dev;
