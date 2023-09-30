import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Home from "./Home";
import Project from "./project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "project/:id",
        element: <Project />,
      },
    ],
  },
]);

export default router;
