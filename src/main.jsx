import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import IndividualCard from "./components/IndividualCard/IndividualCard";
import Cards from "./components/Cards/Cards";

const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      {
        path: "/",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Cards />,
      },
      {
        path: "/user/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <IndividualCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
