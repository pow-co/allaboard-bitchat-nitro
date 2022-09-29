import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import App from "./App";
import { HandcashProvider } from "./context/handcash";
import { RelayProvider } from "./context/relay";
import "./index.css";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <RelayProvider>
      <HandcashProvider>
        <App />
      </HandcashProvider>
    </RelayProvider>
  </Provider>,
  document.getElementById("root")
);
