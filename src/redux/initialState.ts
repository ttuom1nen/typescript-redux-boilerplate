import { Todo } from "./todos/interfaces";

export interface StoreState {
  todos: Todo[];
}

export const initialState: StoreState = {
  todos: [],
};
