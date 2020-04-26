export enum ActionTypes {
  DidInvalidate = "todos/didInvalidate",
  SetUsers = "user/setUsers",
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}

export interface SetUsersAction {
  type: ActionTypes.SetUsers;
  payload: User[];
}

export interface InvalidateAction {
  type: ActionTypes.DidInvalidate;
}

export type Action = SetUsersAction | InvalidateAction;
