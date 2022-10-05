import React from "react";
import error from "./119776-table-fan-404-error.json";
import Lottie from "lottie-react";

const Errorpage = () => {
  return (
    <div>
      <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
        <Lottie animationData={error} loop={true} />
      </div>
    </div>
  );
};

export default Errorpage;
