export interface TemplateTypeState {
	type: string;
}
export type TemplateTypeAction = {
	type: "CHANGE_TEMPLATE";
	templateName: string;
};

const initialState: TemplateTypeState = {
	type: "",
};
export const TemplateTypeReducer = (
	state: TemplateTypeState = initialState,
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
