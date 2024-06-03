import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="text-5xl">Home : it is the best place on earth</div>
    ),
  },
]);
