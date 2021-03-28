import { Reducer } from "redux";

const initialState: string[] = [];

type SkillsAction =
	| { type: "ADD_SKILL"; payload: string }
	| { type: "REMOVE_SKILL"; index: number };

export const SkillReducer: Reducer<string[], SkillsAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "ADD_SKILL": {
			return [...state, action.payload];
		}
		case "REMOVE_SKILL": {
			return state;
		}
		default:
			return state;
	}
};
