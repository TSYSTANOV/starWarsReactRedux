import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import { App } from "./pages/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
