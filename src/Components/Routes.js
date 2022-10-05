import Root from "./Root";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Errorpage from "./Errorpage";
import Home from "./Home";
import Beef from "../Foods/Beef";
import Chicken from "../Foods/Chicken";
import Vegeterian from "../Foods/Vegeterian";
import Dessert from "../Foods/Dessert";
import Seafood from "../Foods/Seafood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "beef",
        element: <Beef></Beef>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Beef"),
      },
      {
        path: "chicken",
        element: <Chicken></Chicken>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken"),
      },
      {
        path: "dessert",
        element: <Dessert></Dessert>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=honey"),
      },
      {
        path: "seafood",
        element: <Seafood></Seafood>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish"),
      },
      {
        path: "vegetarian",
        element: <Vegeterian></Vegeterian>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato"),
      },
      {
        path: "foods",
        element: <loadedCatagories></loadedCatagories>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
      { path: "*", element: <Errorpage></Errorpage> },
    ],
  },
]);

export default router;