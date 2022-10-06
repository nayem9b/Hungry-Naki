import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LoadedCatagories = ({ catagory }) => {
  const { strCategory, strCategoryThumb } = catagory;
  return (
    // <h1> hello</h1>
    <Link to={`../${strCategory}`} aria-label='View Item'>
      <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
        <img
          className='object-cover w-full h-56 md:h-64 xl:h-80'
          src={strCategoryThumb}
          alt=''
        />
        <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
          <p className='mb-4 text-lg font-bold text-gray-100'>{strCategory}</p>
          {/* <p className='mb-4 text-lg font-bold text-gray-100'>
            {chicken.strMeal}
          </p> */}
          <br />
          {/* <p className='text-sm tracking-wide text-gray-300'>
            {strInstructions}
          </p> */}
          <br />
          {/* <p className='text-sm tracking-wide text-gray-300'>Price: {price}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default LoadedCatagories;
