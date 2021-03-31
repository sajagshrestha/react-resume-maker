import { Reducer } from "redux";

export interface IMODAL {
	openEducationModal: boolean;
	openProjectModal: boolean;
}

const initialState: IMODAL = {
	openEducationModal: false,
	openProjectModal: false,
};

export type ModalAction =
	| { type: "OPEN_EDUCATION_MODAL" }
	| { type: "CLOSE_EDUCATION_MODAL" }
	| { type: "OPEN_PROJECT_MODAL" }
	| { type: "CLOSE_PROJECT_MODAL" };

export const ModalReducer: Reducer<IMODAL, ModalAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "OPEN_EDUCATION_MODAL": {
			return {
				...state,
				openEducationModal: true,
			};
		}
		case "CLOSE_EDUCATION_MODAL": {
			return {
				...state,
				openEducationModal: false,
			};
		}
		case "OPEN_PROJECT_MODAL": {
			return {
				...state,
				openProjectModal: true,
			};
		}
		case "CLOSE_PROJECT_MODAL": {
			return {
				...state,
				openProjectModal: false,
			};
		}
		default:
			return initialState;
	}
};
