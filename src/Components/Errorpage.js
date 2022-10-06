import React from "react";
import error from "./119776-table-fan-404-error.json";
import Lottie from "lottie-react";

const Errorpage = () => {
  return (
    <div>
      <div className=' flex justify-center lg:ml-[400px] lg:mt-[-66px] lg:h-[800px] sm:h-[100px] sm:w-[300px] lg:w-[800px]'>
        <Lottie animationData={error} loop={true} />
      </div>
    </div>
  );
};

export default Errorpage;
