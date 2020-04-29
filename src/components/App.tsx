import React, { useContext } from "react";
import TodoList from "./Todos/TodoList";
import { Button } from "@material-ui/core";
import { ThemeContext } from "./ThemeProvider";

const App: React.FC = () => {
  const setThemeName = useContext(ThemeContext);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setThemeName("lightTheme")}
      >
        Set Light Theme
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setThemeName("darkTheme")}
      >
        Set Dark Theme
      </Button>
      <TodoList />
    </div>
  );
};

export default App;
