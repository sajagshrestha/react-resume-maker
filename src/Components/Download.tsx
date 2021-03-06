import { PDFDownloadLink } from "@react-pdf/renderer";
import { useReduxSelector } from "../Reducers";
import MinimalPDF from "../TemplatePdf/MinimalPDF";
import styled from "styled-components";

export const DownloadContainer = styled.div`
	height: 50px;
	width: 100px;
	position: fixed;
	bottom: 50px;
	z-index: 100;
`;

const Download = () => {
	const { personalInformation, skills } = useReduxSelector((state) => state);
	return (
		<DownloadContainer>
			<PDFDownloadLink
				document={
					<MinimalPDF
						personalInfo={personalInformation}
						skills={skills}
					/>
				}>
				Download
			</PDFDownloadLink>
		</DownloadContainer>
	);
};

export default Download;
