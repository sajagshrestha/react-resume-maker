import { useReduxSelector } from "../Reducers";

const Customize: React.FC = () => {
	const templateType = useReduxSelector((state) => state.template.type);
	return (
		<>customize:{templateType}</>
		// <CustomizeContainer>
		// 	<Dasbboard />
		// 	<Preview template =""  />
		// </CustomizeContainer>
	);
};
export default Customize;
