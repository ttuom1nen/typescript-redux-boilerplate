import { combineReducers } from "redux";
import { todosReducer } from "./todos/todosReducer";
import { usersReducer } from "./users/usersReducer";
import { themeReducer } from "./main/mainReducer";
import { StoreState } from "./initialState";

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  users: usersReducer,
  theme: themeReducer,
});
