import { combineReducers } from "redux";
import { todosReducer } from "./todos/reducer";
import { StoreState } from "./initialState";

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
