import React from "react";

import { useLoaderData } from "react-router-dom";
import CardForDessert from "./CardForDessert";

const Dessert = () => {
  const loaderData = useLoaderData();
  const dessertData = loaderData.meals;
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
        {dessertData.map((dessert) => (
          <CardForDessert key={dessert.idMeal} dessert={dessert} />
        ))}
      </div>
    </div>
  );
};

export default Dessert;
