import { Reducer } from "redux";

export interface IPROJECT {
	id?: string;
	title: string;
	description: string;
	repoLink?: string;
	demoLink?: string;
}

const initialState: IPROJECT[] = [];

export type ProjectActions =
	| { type: "ADD_PROJECT"; payload: IPROJECT }
	| { type: "DELETE_PROJECT"; payload: IPROJECT }
	| { type: "EDIT_PROJECT"; payload: IPROJECT; id: string }
	| { type: "RESET" };

export const ProjectReducer: Reducer<IPROJECT[], ProjectActions> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "ADD_PROJECT":
			return [...state, action.payload];
		case "DELETE_PROJECT": {
			return state.filter((edu: IPROJECT) => {
				return edu !== action.payload;
			});
		}
		case "EDIT_PROJECT": {
			const newState = state.map((project: IPROJECT) => {
				if (project.id === action.payload.id) {
					console.log(action.payload);
					return action.payload;
				}
				return project;
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
