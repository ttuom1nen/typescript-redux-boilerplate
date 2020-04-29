import { Todo } from "./todos/todosInterfaces";
import { User } from "./users/usersInterfaces";

export interface TodosState {
  didInvalidate: boolean;
  fetching: boolean;
  data: Todo[];
}

export interface UsersState {
  didInvalidate: boolean;
  fetching: boolean;
  data: User[];
}

export interface StoreState {
  todos: TodosState;
  users: UsersState;
  theme: string;
}

export const initialState: StoreState = {
  todos: {
    didInvalidate: false,
    fetching: true,
    data: [],
  },
  users: {
    didInvalidate: false,
    fetching: true,
    data: [],
  },
  theme: "light",
};
