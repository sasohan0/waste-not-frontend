import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <div>THis is home</div>,
      },
    ],
  },
]);
