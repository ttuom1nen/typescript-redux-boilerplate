import { Todo, Action, ActionTypes } from "./todosInterfaces";
import { initialState, TodosState } from "../initialState";

const setTodosData = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case ActionTypes.SetTodos:
      return action.payload;
    case ActionTypes.DeleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    case ActionTypes.ToggleCompleted:
      return state.map((todo: Todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
    default:
      return state;
  }
};

const fetchInvalidated = (state: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case ActionTypes.SetTodos:
      return false;
    case ActionTypes.DidInvalidate:
      return true;
    default:
      return false;
  }
};

const setTodosFetching = (state: boolean, action: Action): boolean => {
  switch (action.type) {
    case ActionTypes.DidInvalidate:
    case ActionTypes.SetTodos:
      return false;

    default:
      return false;
  }
};

export const todosReducer = (
  state: TodosState = initialState.todos,
  action: Action
) => {
  return {
    didInvalidate: fetchInvalidated(state.didInvalidate, action),
    fetching: setTodosFetching(state.fetching, action),
    data: setTodosData(state.data, action),
  };
};
