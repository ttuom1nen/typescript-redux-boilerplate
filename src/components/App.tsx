import React from "react";
import TodoList from "./Todos/TodoList";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { switchTheme } from "../redux/main/mainActions";

const App: React.FC = () => {
  // const setTheme = useContext(ThemeContext);
  const dispatch = useDispatch();

  const setTheme = (themeName: string): void => {
    dispatch(switchTheme(themeName));
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setTheme("lightTheme")}
      >
        Set Light Theme
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setTheme("darkTheme")}
      >
        Set Dark Theme
      </Button>
      <TodoList />
    </div>
  );
};

export default App;
