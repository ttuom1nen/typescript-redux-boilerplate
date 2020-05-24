import React from "react";
import TodoList from "./Todos/TodoList";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../redux/initialState";
import { switchTheme } from "../redux/main/mainActions";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    appContainer: {
      backgroundColor: theme.palette.secondary.main,
    },
  })
);

const App: React.FC = () => {
  const localClasses = useStyles();
  const dispatch = useDispatch();
  const theme: string = useSelector((state: StoreState) => state.theme);

  const chooseTheme = (event: React.ChangeEvent<{ value: any }>): void => {
    dispatch(switchTheme(event.target.value));
    console.log(event.target.value);
  };

  return (
    <div className={localClasses.appContainer}>
      <div>
        <FormControl className={localClasses.formControl}>
          <InputLabel id="demo-simple-select-label">Theme</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={theme}
            onChange={chooseTheme}
          >
            <MenuItem value={"pinkTheme"}>Pink</MenuItem>
            <MenuItem value={"lightTheme"}>Light</MenuItem>
            <MenuItem value={"darkTheme"}>Dark</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={localClasses.container}>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
