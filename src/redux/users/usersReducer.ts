import { User, Action, ActionTypes } from "./usersInterfaces";
import { initialState, UsersState } from "../initialState";

const setUsersData = (state: User[] = [], action: Action): User[] => {
  switch (action.type) {
    case ActionTypes.SetUsers:
      return action.payload;
    default:
      return state;
  }
};

const fetchInvalidated = (state: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case ActionTypes.SetUsers:
      return false;
    case ActionTypes.DidInvalidate:
      return true;
    default:
      return false;
  }
};

const setUsersFetching = (state: boolean, action: Action): boolean => {
  switch (action.type) {
    case ActionTypes.DidInvalidate:
    case ActionTypes.SetUsers:
      return false;

    default:
      return true;
  }
};

export const usersReducer = (
  state: UsersState = initialState.users,
  action: Action
) => {
  return {
    didInvalidate: fetchInvalidated(state.didInvalidate, action),
    fetching: setUsersFetching(state.fetching, action),
    data: setUsersData(state.data, action),
  };
};
