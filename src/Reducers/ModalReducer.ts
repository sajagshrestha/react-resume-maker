import { Reducer } from "redux";

export interface IMODAL {
	openEducationModal: boolean;
}

const initialState: IMODAL = {
	openEducationModal: false,
};

export type ModalAction =
	| { type: "OPEN_EDUCATION_MODAL" }
	| { type: "CLOSE_EDUCATION_MODAL" };

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
		default:
			return initialState;
	}
};
