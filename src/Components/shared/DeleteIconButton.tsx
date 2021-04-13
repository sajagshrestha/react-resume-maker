import { IconButton } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const DeleteIconButton: React.FC<{ click: () => void }> = ({ click }) => {
	return (
		<IconButton onClick={click}>
			<DeleteOutlineIcon />
		</IconButton>
	);
};

export default DeleteIconButton;
