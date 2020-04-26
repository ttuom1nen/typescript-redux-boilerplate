import axios from "axios";
import { Dispatch } from "redux";
import {
  ActionTypes,
  User,
  SetUsersAction,
  InvalidateAction,
} from "./usersInterfaces";
import { BASE_URL } from "../config";

const url = `${BASE_URL}/users`;

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<User[]>(url);

      dispatch<SetUsersAction>({
        type: ActionTypes.SetUsers,
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
