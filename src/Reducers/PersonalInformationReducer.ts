import { Reducer } from "redux";
export interface PERSONALDATA {
	[key: string]: string;
}
const initialState: PERSONALDATA = {
	firstName: "",
	lastName: "",
	email: "",
	github: "",
	phone: "",
	summary: "",
};
export type PersonalInformationAction =
	| { type: "ADD_PERSONAL_DATA"; name: string; value: string }
	| { type: "RESET" };

export const PersonalInformationReducer: Reducer<
	PERSONALDATA,
	PersonalInformationAction
> = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PERSONAL_DATA": {
			return {
				...state,
				[action.name]: action.value,
			};
		}
		case "RESET": {
			return initialState;
		}
		default:
			return state;
	}
};
