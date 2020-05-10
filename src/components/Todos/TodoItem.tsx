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
      border: `1px solid ${theme.palette.primary.dark}`,
      borderRadius: "3px",
      margin: "10px",
      maxWidth: "200px",
    },
    todoTitle: {
      backgroundColor: theme.palette.primary.main,
      padding: "10px",
      color: "#fff",
    },
    todoContent: {
      padding: "10px",
      color: theme.palette.primary.main,
    },
  })
);

const TodoItem: React.FC<Props> = (props) => {
  const { id, title, completed, onTodoClick } = props;
  const localClasses = useStyles();

  return (
    <div onClick={() => onTodoClick(id)} className={localClasses.todoItem}>
      <div className={localClasses.todoTitle}>
        <b>{title}</b>
      </div>
      <div className={localClasses.todoContent}>
        <p>Completed: {"" + completed}</p>
      </div>
    </div>
  );
};

export default TodoItem;
