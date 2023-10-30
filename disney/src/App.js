import "./App.css";
import Details from "./routes/Details";
import Header from "./components/Header";
import Home from "./routes/Home";
import Login from "./routes/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/detail/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
