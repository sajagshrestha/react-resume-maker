import { Reducer } from "redux";
export interface IEDUCATION {
	instituteName: string;
	degree: string;
	startDate: string;
	endDate: string;
}
const initialState: IEDUCATION[] = [];
export type EducationAction =
	| { type: "ADD_EDUCATION"; payload: IEDUCATION }
	| { type: "RESET" };

export const EducationReducer: Reducer = (
	state: IEDUCATION[] = initialState,
	action: EducationAction
) => {
	switch (action.type) {
		case "ADD_EDUCATION": {
			return [...state, action.payload];
		}
		case "RESET": {
			return initialState;
		}
		default:
			return state;
	}
};
