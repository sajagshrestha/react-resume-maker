import { Reducer } from "redux";
export interface ISKILL {
	id?: string;
	skill: string;
}
const initialState: ISKILL[] = [];

export type SkillsAction =
	| { type: "ADD_SKILL"; payload: ISKILL }
	| { type: "DELETE_SKILL"; payload: ISKILL };

export const SkillReducer: Reducer<ISKILL[], SkillsAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "ADD_SKILL": {
			return [...state, action.payload];
		}
		case "DELETE_SKILL": {
			const newState = state.filter((skill: ISKILL) => {
				return skill.id !== action.payload.id;
			});
			return newState;
		}
		default:
			return state;
	}
};
