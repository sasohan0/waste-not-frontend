import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import UserProducts from "../pages/UserProducts";
import EditProduct from "../pages/EditProduct";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../pages/AddProduct";
import EditProfile from "../pages/EditProfile";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import Blogs from "../pages/Blogs";
import Analytics from "../pages/Analytics";
import Carousel from "../pages/Carousel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://waste-not-backend.onrender.com/products"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`https://waste-not-backend.onrender.com/products/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/carousel",
        element: <Carousel />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRoutes>
            <EditProfile />
          </PrivateRoutes>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://waste-not-backend.onrender.com/user/get/${params.id}`),
      },
      {
        path: "my-products",
        element: (
          <PrivateRoutes>
            <UserProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "analytics",
        element: (
          <PrivateRoutes>
            <Analytics />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-products/edit/:id",
        element: (
          <PrivateRoutes>
            <EditProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://waste-not-backend.onrender.com/products/${params.id}`),
      },
    ],
  },
]);
