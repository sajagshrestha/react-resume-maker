import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddButton: React.FC<any> = (props) => {
	return (
		<Button
			{...props}
			variant="outlined"
			color="primary"
			startIcon={<AddIcon />}>
			add
		</Button>
	);
};

export default AddButton;
