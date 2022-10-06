import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import Onepiece from "../Components/Onepiece";

const Beef = () => {
  // const [books, setBooks] = useState([])
  // useEffect(() => {
  //   fetch('https://api.itbook.store/1.0/new')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])
  const loaderData = useLoaderData();
  const beefData = loaderData.meals;
  console.log(beefData);

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
        {beefData.map((beef) => (
          <Onepiece key={beef.idMeal} beef={beef} />
        ))}
      </div>
    </div>
  );
};

export default Beef;
