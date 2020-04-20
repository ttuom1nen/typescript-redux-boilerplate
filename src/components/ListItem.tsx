import React from "react";

interface Props {
  id: number;
  title: string;
  completed: boolean;
  onTodoClick(id: number): void;
}

const ListItem: React.FC<Props> = (props) => {
  const { id, title, completed, onTodoClick } = { ...props };
  return (
    <div onClick={() => onTodoClick(id)}>
      <h1>{title}</h1>
      <p>Completed: {completed}</p>
    </div>
  );
};

export default ListItem;
