import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App";
import { reducers } from "./redux/rootReducer";
import ThemeProvider from "./components/ThemeProvider";
import { Typography } from "@material-ui/core";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <Typography color="textPrimary">
        <App />
      </Typography>
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
