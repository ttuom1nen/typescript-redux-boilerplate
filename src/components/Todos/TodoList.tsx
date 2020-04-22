import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { StoreState } from "../../redux/initialState";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo } from "../../redux/todos/actions";
import { Todo } from "../../redux/todos/interfaces";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector((state: StoreState) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
    return () => {
      console.log("TodoList cleaned up!");
    };
  }, [dispatch]);

  const onTodoClick = (id: number): void => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {todos.map((todo: Todo) => (
        <TodoItem
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

export default TodoList;
