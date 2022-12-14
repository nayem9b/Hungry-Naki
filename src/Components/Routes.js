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
import FindUs from "./Navbar/FindUs";
import MealDetails from "./MealDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
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
        path: "findus",
        element: <FindUs></FindUs>,
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
      // {
      //   path: "meal/:idMeal",
      //   element: <MealDetails></MealDetails>,
      //   loader: ({ params }) =>
      //    return fetch(
      //       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=/${params.idMeal}`
      //     ),
      // },
      {
        path: `/vegetarian/:idMeal`,
        element: <MealDetails></MealDetails>,
      },
      {
        path: `/chicken/:idMeal`,
        element: <MealDetails></MealDetails>,
      },
      {
        path: `/beef/:idMeal`,
        element: <MealDetails></MealDetails>,
      },
      {
        path: `/dessert/:idMeal`,
        element: <MealDetails></MealDetails>,
      },
      {
        path: `/seafood/:idMeal`,
        element: <MealDetails></MealDetails>,
      },
      // {
      // loader: async ({ params }) => {
      //   return fetch(
      //     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
      //   );
      // },
      //   path: `/vegetarian/${idMeal}`,
      //   loader: async ({ params }) => {
      //     return fetch(
      //       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
      //     );
      //   },
      //   element: <MealDetails></MealDetails>,
      // },

      { path: "*", element: <Errorpage></Errorpage> },
    ],
  },
]);

export default router;
