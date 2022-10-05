import React from "react";
import tablefan from "./119776-table-fan-404-error.json";
import food from "./90016-order-food.json";
import Lottie from "lottie-react";
import Navbar from "./Navbar";
import AllYourFoods from "./AllYourFoods";

const Home = () => {
  return (
    <div>
      <AllYourFoods></AllYourFoods>
      <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
        <Lottie animationData={food} loop={true} />
      </div>
    </div>
  );
};

export default Home;
