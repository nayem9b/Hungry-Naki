import React from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MealDetails = () => {
  const location = useLocation();
  // const mealData = useLoaderData();
  // const params = useParams();
  // const { strMealThumb, strMeal } = params;

  // const { strMealThumb, strMeal, strSource, strInstructions, strYoutube } =
  //   mealData;

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
        <div className=' lg:w-1/2'>
          <img
            src={location.state.photo}
            alt=''
            className='object-cover w-full  h-80 lg:h-full'
          />
        </div>
        <div className='flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400'>
              {location.state.Category}
            </p>
          </div>
          <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
            {location.state.mealName}
          </h5>
          <p className='mb-5 text-gray-900'>
            {location.state.details.substring(0, 200)}...
          </p>
          <p className='mb-5 text-gray-900'>
            Category: {location.state.Category}
          </p>

          <p className='mb-5 text-gray-900'>
            Main Ingredient: {location.state.main}
          </p>
          <p className='mb-5 text-gray-900'>Origin: {location.state.origin}</p>
          <p className='mb-5 text-gray-900'>Tags: {location.state.tag}</p>

          <div className='flex items-center'></div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
