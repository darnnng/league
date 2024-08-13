import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Layout } from "components/layout";

const HomePage = lazy(() => import("@/pages/homePage/homePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
]);
