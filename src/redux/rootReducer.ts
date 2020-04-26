import { combineReducers } from "redux";
import { todosReducer } from "./todos/todosReducer";
import { usersReducer } from "./users/usersReducer";
import { StoreState } from "./initialState";

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  users: usersReducer,
});
