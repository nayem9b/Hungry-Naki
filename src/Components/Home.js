import React from "react";
import tablefan from "./119776-table-fan-404-error.json";
import food from "./90016-order-food.json";
import Lottie from "lottie-react";
import Navbar from "./Navbar";
import AllYourFoods from "./AllYourFoods";
import LoadedCatagories from "./LoadedCatagories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loaderData = useLoaderData();
  const catagoryData = loaderData.categories;
  return (
    <div>
      <AllYourFoods></AllYourFoods>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
          {catagoryData.map((catagory) => (
            <LoadedCatagories key={catagory.idCategory} catagory={catagory} />
          ))}
        </div>
      </div>
      <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
        <Lottie animationData={food} loop={true} />
      </div>
    </div>
  );
};

export default Home;
