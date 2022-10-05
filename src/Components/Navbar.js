import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <nav className='flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto'>
            <NavLink
              to='/beef'
              aria-label='Home'
              title='Home'
              className={({ isActive }) =>
                isActive
                  ? "font-medium mr-5 tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium mr-5 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }>
              Beef
            </NavLink>
            <NavLink
              to='/chicken'
              aria-label='Home'
              title='Home'
              className={({ isActive }) =>
                isActive
                  ? "font-medium mr-5 tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium mr-5 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }>
              Chicken
            </NavLink>
            <NavLink
              to='/dessert'
              aria-label='Home'
              title='Home'
              className={({ isActive }) =>
                isActive
                  ? "font-medium mr-5 tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium  mr-5 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }>
              Dessert
            </NavLink>
            <NavLink
              to='/seafood'
              aria-label='Home'
              title='Home'
              className={({ isActive }) =>
                isActive
                  ? "font-medium mr-5 tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium mr-5 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }>
              Sea Food
            </NavLink>
            <NavLink
              to='/vegetarian'
              aria-label='Home'
              title='Home'
              className={({ isActive }) =>
                isActive
                  ? "font-medium mr-5 tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  : "font-medium mr-5 tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              }>
              Vegetarian
            </NavLink>
            {/* <a className='mr-5 hover:text-gray-900'>Chicken</a>
            <a className='mr-5 hover:text-gray-900'>Dessert</a>
            <a className='hover:text-gray-900 mr-5'>Sea Food</a>
            <a className='hover:text-gray-900'>Vegetarian</a> */}
          </nav>
          <a className='flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-10 h-10 text-white p-2 bg-yellow-500 rounded-full'
              viewBox='0 0 24 24'>
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-xl'>Hungry Naki?</span>
          </a>
          <div className='lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0'>
            <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
              <h1 className='text-lg text-orange-400'>Find Us</h1>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-1'
                viewBox='0 0 24 24'>
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button>
            <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
              <h1 className='text-lg text-orange-400'>Cart</h1>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-1'
                viewBox='0 0 24 24'>
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
