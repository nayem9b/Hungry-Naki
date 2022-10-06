import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CardForVegeterian = ({ vegeterian }) => {
  const navigate = useNavigate();

  const { strMeal, strMealThumb, strInstructions, idMeal } = vegeterian;
  return (
    <div>
      <NavLink
        // to={`../${idMeal}`}
        aria-label='View Item'
        onClick={() => {
          navigate(`/vegetarian/${idMeal}`, {
            state: {
              mealName: vegeterian.strMeal,
              Category: vegeterian.strCategory,
              photo: vegeterian.strMealThumb,
              details: vegeterian.strInstructions,
              tag: vegeterian.strTags,
              origin: vegeterian.strArea,
              main: vegeterian.strIngredient1,
            },
          });
        }}>
        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
          <img
            className='object-cover w-full h-56 md:h-64 xl:h-80'
            src={strMealThumb}
            alt=''
          />
          <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
            <p className='mb-4 text-lg font-bold text-gray-100'>
              {vegeterian.strMeal}
            </p>
            {/* <p className='mb-4 text-lg font-bold text-gray-100'>
              {vegeterian.strMeal}
            </p> */}
            <br />
            <p className='text-sm tracking-wide text-gray-300'>
              {strInstructions}
            </p>

            <br />
            {/* <p className='text-sm tracking-wide text-gray-300'>
              Price: {price}
            </p> */}
          </div>
        </div>
      </NavLink>
      <button
        onClick={() => {
          navigate(`/vegetarian/${idMeal}`, {
            state: {
              mealName: vegeterian.strMeal,
              Category: vegeterian.strCategory,
              photo: vegeterian.strMealThumb,
              details: vegeterian.strInstructions,
              youtube: vegeterian.strYoutube,
              tag: vegeterian.strTags,
              origin: vegeterian.strArea,
              main: vegeterian.strIngredient1,
            },
          });
        }}
        className='btn btn-primary'>
        See More Details
      </button>
    </div>
  );
};

export default CardForVegeterian;
