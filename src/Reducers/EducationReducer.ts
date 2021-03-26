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
	| { type: "DELETE_EDUCATION"; payload: IEDUCATION }
	| { type: "EDIT_EDUCATION"; payload: IEDUCATION; index: number | undefined }
	| { type: "RESET" };

export const EducationReducer: Reducer = (
	state: IEDUCATION[] = initialState,
	action: EducationAction
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
			const newState = state.map((edu: IEDUCATION, index: number) => {
				if (index === action.index) {
					console.log(action.payload);
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
