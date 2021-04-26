import { combineReducers } from "redux";
import { CommonReducer } from "./modules/common";

export const rootReducer = combineReducers({
  common: CommonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
