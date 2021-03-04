import { useHistory } from "react-router-dom";
import { useReduxDispatch } from "../Reducers";
import { HeadingTest } from "./Home.styles";

const Home: React.FC = () => {
	const history = useHistory();
	const dispatch = useReduxDispatch();
	const gotoCustomize = (templateType: string) => {
		dispatch({ type: "CHANGE_TEMPLATE", templateName: templateType });
		history.push("/customize");
	};
	return (
		<>
			<HeadingTest>Select a Template</HeadingTest>
			<div onClick={() => gotoCustomize("minimal")}>Minimal</div>
		</>
	);
};

export default Home;
