import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Nav from "../layouts/Nav";
import SignIn from "../pages/SignIn";
import Songs from "../components/Songs";
import Artists from "../components/Artists";
import ErrorPage from "../views/ErrorPage";
import Played from "../components/Played";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Nav />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/home/song",
        element: <Songs />,
        ErrorElement: <ErrorPage />,
      },
      {
        path: "/home/artist",
        element: <Artists />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/home/played",
        element: <Played />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
