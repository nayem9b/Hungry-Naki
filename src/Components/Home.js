import React from "react";
import tablefan from "./119776-table-fan-404-error.json";
import food from "./90016-order-food.json";
import Lottie from "lottie-react";
import Navbar from "./Navbar";
import AllYourFoods from "./AllYourFoods";
import LoadedCatagories from "./LoadedCatagories";
import { useLoaderData } from "react-router-dom";
import Testimonial from "./Navbar/Testimonial";
import Hero from "./Navbar/Hero";
import Footer from "./Navbar/Footer";
import FastestDelivery from "./Navbar/FastestDelivery";
import delivery from "./99558-delivery-food-splash.json";

const Home = () => {
  const loaderData = useLoaderData();
  const catagoryData = loaderData.categories;
  return (
    <div>
      <div className='flex lg:ml-20 mt-[-60px]'>
        <div className='mt-[50px]'>
          <AllYourFoods></AllYourFoods>
        </div>

        <div className='w-4/5 lg:w-4/5 lg:h-56  '>
          <Lottie animationData={food} loop={true} />
        </div>
      </div>

      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
          {catagoryData.map((catagory) => (
            <LoadedCatagories key={catagory.idCategory} catagory={catagory} />
          ))}
        </div>
      </div>
      <div className='sm:block  md:flex lg:flex justify-evenly '>
        <div className='sm:w-[300px] lg:w-[780px] lg:h-[80px] sm:h-[500px] '>
          <Lottie animationData={delivery} loop={true} />
        </div>
        <h1 className=' text-8xl w-full text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 lg:inline'>
          Experience the fastest delivery
        </h1>
      </div>
      <div className=' lg:mt-48'>
        <Testimonial></Testimonial>
      </div>

      <div className='flex justify-center'>
        <Hero></Hero>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
