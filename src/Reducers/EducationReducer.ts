import { Reducer } from "redux";
export interface IEDUCATION {
	id?: string;
	instituteName: string;
	degree: string;
	startDate: string;
	endDate: string;
}
const initialState: IEDUCATION[] = [];
export type EducationAction =
	| { type: "ADD_EDUCATION"; payload: IEDUCATION }
	| { type: "DELETE_EDUCATION"; payload: IEDUCATION }
	| { type: "EDIT_EDUCATION"; payload: IEDUCATION }
	| { type: "RESET" };

export const EducationReducer: Reducer<IEDUCATION[], EducationAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "ADD_EDUCATION": {
			return [...state, action.payload];
		}
		case "DELETE_EDUCATION": {
			return state.filter((edu: IEDUCATION) => {
				return edu !== action.payload;
			});
		}
		case "EDIT_EDUCATION": {
			const newState = state.map((edu: IEDUCATION) => {
				if (edu.id === action.payload.id) {
					return action.payload;
				}
				return edu;
			});

			return newState;
		}
		case "RESET": {
			return initialState;
		}
		default:
			return state;
	}
};
