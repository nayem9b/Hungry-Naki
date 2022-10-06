import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Onepiece = ({ beef }) => {
  const navigate = useNavigate();
  const { strMeal, strMealThumb, strInstructions, idMeal } = beef;
  return (
    <div>
      <NavLink
        // to={`../${idMeal}`}
        onClick={() => {
          navigate(`/vegetarian/${idMeal}`, {
            state: {
              mealName: beef.strMeal,
              Category: beef.strCategory,
              photo: beef.strMealThumb,
              details: beef.strInstructions,
              youtube: beef.strYoutube,
              tag: beef.strTags,
              origin: beef.strArea,
              main: beef.strIngredient1,
            },
          });
        }}
        aria-label='View Item'>
        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
          <img
            className='object-cover w-full h-56 md:h-64 xl:h-80'
            src={strMealThumb}
            alt=''
          />
          <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
            <p className='mb-4 text-lg font-bold text-gray-100'>
              {beef.strMeal}
            </p>
            {/* <p className='mb-4 text-lg font-bold text-gray-100'>
            {beef.strMeal}
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
          navigate(`/beef/${idMeal}`, {
            state: {
              mealName: beef.strMeal,
              Category: beef.strCategory,
              photo: beef.strMealThumb,
              details: beef.strInstructions,
              youtube: beef.strYoutube,
              tag: beef.strTags,
              origin: beef.strArea,
              main: beef.strIngredient1,
            },
          });
        }}
        className='btn btn-primary'>
        See More Details
      </button>
    </div>
  );
};

export default Onepiece;
