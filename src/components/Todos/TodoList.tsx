import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { StoreState } from "../../redux/initialState";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo } from "../../redux/todos/todosActions";
import { Todo } from "../../redux/todos/todosInterfaces";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const fetching: boolean = useSelector(
    (state: StoreState) => state.todos.fetching
  );
  const todos: Todo[] = useSelector((state: StoreState) => state.todos.data);
  const invalidated: boolean = useSelector(
    (state: StoreState) => state.todos.didInvalidate
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const onTodoClick = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const renderTodos = () => {
    return todos.map((todo: Todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        onTodoClick={onTodoClick}
      />
    ));
  };

  const renderError = () => {
    return <p>Fetching failed!</p>;
  };

  return (
    <div>
      {fetching ? (
        <p>Loading...</p>
      ) : !invalidated ? (
        renderTodos()
      ) : (
        renderError()
      )}
    </div>
  );
};

export default TodoList;
