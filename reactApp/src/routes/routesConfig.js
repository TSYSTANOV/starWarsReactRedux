import { FavoritePage } from "../components/FavoritePage/FavoritePage";
import { NotFound } from "../components/NotFound/NotFount";
import { FailPage } from "../pages/FailPage/FailPage";
import { HomePage } from "../pages/HomePage/HomePage";
import PeoplePage from "../pages/PeoplePage/PeoplePage";
import { PersonPage } from "../pages/PersonPage/PersonPage";
import { SearchPage } from "../pages/SearchPage/SearchPage";

export const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/people", element: <PeoplePage /> },
  { path: "/people/:person", element: <PersonPage /> },
  { path: "/favorite", element: <FavoritePage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/fail", element: <FailPage /> },
  { path: "*", element: <NotFound /> },
];
