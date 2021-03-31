//Combine all reducers
import { combineReducers } from "redux";
import { createSelectorHook, createDispatchHook } from "react-redux";
import { TemplateTypeAction, TemplateTypeReducer } from "./TemplateTypeReducer";
import {
	PersonalInformationAction,
	PersonalInformationReducer,
} from "./PersonalInformationReducer";
import { ModalReducer, ModalAction } from "./ModalReducer";
import { EducationAction, EducationReducer } from "./EducationReducer";
import { SkillReducer, SkillsAction } from "./SkillsReducer";
import { ProjectActions, ProjectReducer } from "./ProjectReducer";
//rootReducer
export const rootReducer = combineReducers({
	template: TemplateTypeReducer,
	personalInformation: PersonalInformationReducer,
	modal: ModalReducer,
	education: EducationReducer,
	skills: SkillReducer,
	projects: ProjectReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
//custom selector and dispatch
export const useReduxSelector = createSelectorHook<RootState>();
export const useReduxDispatch = createDispatchHook<
	void,
	| TemplateTypeAction
	| PersonalInformationAction
	| ModalAction
	| EducationAction
	| SkillsAction
	| ProjectActions
>();
