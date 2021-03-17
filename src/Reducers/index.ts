//Combine all reducers
import { combineReducers } from "redux";
import { createSelectorHook, createDispatchHook } from "react-redux";
import { TemplateTypeAction, TemplateTypeReducer } from "./TemplateTypeReducer";
import {
	PersonalInformationAction,
	PersonalInformationReducer,
} from "./PersonalInformationReducer";
import { ModalReducer, ModalAction } from "./ModalReducer";
//rootReducer
export const rootReducer = combineReducers({
	template: TemplateTypeReducer,
	personalInformation: PersonalInformationReducer,
	modal: ModalReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
//custom selector and dispatch
export const useReduxSelector = createSelectorHook<RootState>();
export const useReduxDispatch = createDispatchHook<
	void,
	TemplateTypeAction | PersonalInformationAction | ModalAction
>();
