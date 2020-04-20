import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo } from "../redux/todos/actions";
import { Todo } from "../redux/todos/interfaces";
import { StoreState } from "../redux/initialState";
import ListItem from "./ListItem";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector((state: StoreState) => state.todos);

  const onButtonClick = (): void => {
    dispatch(fetchTodos());
  };

  const onTodoClick = (id: number): void => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {todos.map((todo: Todo) => (
        <ListItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onTodoClick={onTodoClick}
        />
      ))}
    </div>
  );
};

export default App;
