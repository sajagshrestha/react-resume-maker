import { IEDUCATION } from "../../Reducers/EducationReducer";
import { IPROJECT } from "../../Reducers/ProjectReducer";

interface PROPS {
	title: string;
	item: IEDUCATION | IPROJECT;
	handleDelete: () => void;
	handleEdit: () => void;
}
const Skeleton: React.FC<PROPS> = () => {
	return <div></div>;
};

export default Skeleton;
