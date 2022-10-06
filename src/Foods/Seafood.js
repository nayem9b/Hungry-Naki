import React from "react";

import { useLoaderData } from "react-router-dom";
import CardForSeaFood from "./CardForSeaFood";

const SeaFood = () => {
  const loaderData = useLoaderData();
  const seafoodData = loaderData.meals;
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
        {seafoodData.map((seafood) => (
          <CardForSeaFood key={seafood.idMeal} seafood={seafood} />
        ))}
      </div>
    </div>
  );
};

export default SeaFood;
