import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteIconButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<IconButton color="secondary" onClick={onClick}>
			<DeleteIcon />
		</IconButton>
	);
};

export default DeleteIconButton;
