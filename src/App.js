import { RouterProvider } from "react-router";
import "./App.css";
import { routes } from "./components/Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
