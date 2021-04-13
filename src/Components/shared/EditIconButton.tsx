import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const EditIconButton: React.FC<{ click: () => void }> = ({ click }) => {
	return (
		<IconButton onClick={click}>
			<EditIcon />
		</IconButton>
	);
};

export default EditIconButton;
