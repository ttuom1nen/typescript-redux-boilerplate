import axios from "axios";
import { Dispatch } from "redux";
import {
  ActionTypes,
  Todo,
  SetTodosAction,
  DeleteTodoAction,
  ToggleCompletedAction,
  InvalidateAction,
} from "./todosInterfaces";
import { BASE_URL } from "../config";

const url = `${BASE_URL}/todos`;

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<Todo[]>(url);

      dispatch<SetTodosAction>({
        type: ActionTypes.SetTodos,
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);

      dispatch<InvalidateAction>({
        type: ActionTypes.DidInvalidate,
      });
    }
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.DeleteTodo,
    payload: id,
  };
};

export const toggleCompleted = (id: number): ToggleCompletedAction => {
  return {
    type: ActionTypes.ToggleCompleted,
    payload: id,
  };
};

export const didInvalidate = (errorMsg: string): InvalidateAction => {
  return {
    type: ActionTypes.DidInvalidate,
  };
};
