//Combine all reducers
import { combineReducers } from "redux";
import { createSelectorHook, createDispatchHook } from "react-redux";
import { TemplateTypeAction, TemplateTypeReducer } from "./TemplateTypeReducer";

//rootReducer
export const rootReducer = combineReducers({ template: TemplateTypeReducer });
type RootState = ReturnType<typeof rootReducer>;
//custom selector and dispatch
export const useReduxSelector = createSelectorHook<RootState>();
export const useReduxDispatch = createDispatchHook<void, TemplateTypeAction>();
