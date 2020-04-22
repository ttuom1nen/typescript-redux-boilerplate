export enum ActionTypes {
  fetchTodos = "FETCH_TODOS",
  deleteTodo = "DELETE_TODO",
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export type Action = FetchTodosAction | DeleteTodoAction;
