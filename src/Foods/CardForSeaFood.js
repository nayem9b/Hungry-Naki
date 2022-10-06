import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const CardForSeaFood = ({ seafood }) => {
  const navigate = useNavigate();
  const { strMeal, strMealThumb, strInstructions, idMeal } = seafood;
  return (
    <div>
      <NavLink to={`../${idMeal}`} aria-label='View Item'>
        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
          <img
            className='object-cover w-full h-56 md:h-64 xl:h-80'
            src={strMealThumb}
            alt=''
          />
          <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
            <p className='mb-4 text-lg font-bold text-gray-100'>
              {seafood.strMeal}
            </p>
            {/* <p className='mb-4 text-lg font-bold text-gray-100'>
            {seafood.strMeal}
          </p> */}
            <br />
            <p className='text-sm tracking-wide text-gray-300'>
              {strInstructions}
            </p>
            <br />
            {/* <p className='text-sm tracking-wide text-gray-300'>Price: {price}</p> */}
          </div>
        </div>
      </NavLink>
      <button
        onClick={() => {
          navigate(`/seafood/${idMeal}`, {
            state: {
              mealName: seafood.strMeal,
              Category: seafood.strCategory,
              photo: seafood.strMealThumb,
              details: seafood.strInstructions,
              youtube: seafood.strYoutube,
              tag: seafood.strTags,
              origin: seafood.strArea,
              main: seafood.strIngredient1,
            },
          });
        }}
        className='btn btn-primary'>
        See More Details
      </button>
    </div>
  );
};

export default CardForSeaFood;
