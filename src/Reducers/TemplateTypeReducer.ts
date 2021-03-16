interface ITEMPLATE {
	type: string;
}
const initialState: ITEMPLATE = {
	type: "",
};
export type TemplateTypeAction = {
	type: "CHANGE_TEMPLATE";
	templateName: string;
};
export const TemplateTypeReducer = (
	state: ITEMPLATE = initialState,
	action: TemplateTypeAction
) => {
	switch (action.type) {
		case "CHANGE_TEMPLATE":
			return {
				...state,
				type: action.templateName,
			};
		default:
			return initialState;
	}
};
