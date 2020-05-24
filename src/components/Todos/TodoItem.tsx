import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import Switch from "@material-ui/core/Switch";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

interface Props {
  id: number;
  title: string;
  completed: boolean;
  onTodoClick(id: number): void;
  onToggleComplete(id: number): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    todoItem: {
      maxWidth: "400px",
      margin: "10px",
      padding: "10px",
      borderRadius: "7px",
      backgroundColor: "#fff",
      color: theme.palette.primary.main,
      boxShadow: "0 2px 2px 2px rgba(0,0,0,0.12)",
    },
    todoTitle: {
      display: "flex",
      justifyContent: "space-between",
    },
    handCursor: {
      cursor: "pointer",
    },
  })
);

const TodoItem: React.FC<Props> = (props) => {
  const { id, title, completed, onTodoClick, onToggleComplete } = props;
  const localClasses = useStyles();

  return (
    <div className={localClasses.todoItem}>
      <div className={localClasses.todoTitle}>
        <div>
          <Switch
            size="small"
            checked={completed}
            onChange={() => onToggleComplete(id)}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
        <div>
          <DeleteForeverOutlinedIcon
            className={localClasses.handCursor}
            onClick={() => onTodoClick(id)}
          />
        </div>
      </div>
      <div>
        <Typography>{title}</Typography>
      </div>
    </div>
  );
};

export default TodoItem;
