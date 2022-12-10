import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import NotFound from "../Errors/NotFound";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path:'*',
    element:<NotFound></NotFound>
  }
]);
