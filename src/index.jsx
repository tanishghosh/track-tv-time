import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import ErrorPage from "./error-page";
import Detailpage from "./detailpage/Detailpage"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
    },
    {
        path: "view/:id",
        element: <Detailpage/>
    }
  ]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
