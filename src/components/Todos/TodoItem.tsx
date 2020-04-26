import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

interface Props {
  id: number;
  title: string;
  completed: boolean;
  onTodoClick(id: number): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    todoItem: {
      border: "1px solid silver",
      borderRadius: "3px",
      padding: "10px",
      margin: "10px",
      maxWidth: "200px",
    },
  })
);

const TodoItem: React.FC<Props> = (props) => {
  const { id, title, completed, onTodoClick } = props;
  const localClasses = useStyles();

  return (
    <div onClick={() => onTodoClick(id)} className={localClasses.todoItem}>
      <b>{title}</b>
      <p>Completed: {"" + completed}</p>
    </div>
  );
};

export default TodoItem;
