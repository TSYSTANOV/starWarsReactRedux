import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConfig } from "../routes/routesConfig";
import { Header } from "@components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          {routesConfig.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };
