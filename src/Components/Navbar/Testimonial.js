import React from "react";
import reshob from "../Reshob.jpg";
import riyad from "../Riyad.jpg";

const Testimonial = () => {
  return (
    <div>
      <section class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto'>
          <h1 class='text-3xl font-medium title-font text-gray-900 mb-12 text-center'>
            Hunger Story
          </h1>
          <div class='flex flex-wrap -m-4'>
            <div class='p-4 md:w-1/2 w-full'>
              <div class='h-full bg-gray-100 p-8 rounded'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  class='block w-5 h-5 text-orange-400 mb-4'
                  viewBox='0 0 975.036 975.036'>
                  <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                </svg>
                <p class='leading-relaxed mb-6'>
                  Convenient and plenty of options, however on many occasions I
                  wasn't able to find certain restaurants, or the restaurant
                  would say unavailable. When I checked other apps the
                  restaurant would show up and allowed me to order. And
                  sometimes the restaurant would show as closed on{" "}
                  <span className='text-orange-400 text-xl font-bold italic'>
                    Hungry Naki
                  </span>{" "}
                  , but going to the restaurant myself I could see that it was
                  open and still taking orders.
                </p>
                <a class='inline-flex items-center'>
                  <div className='avatar'>
                    <div className='w-12 rounded-full'>
                      <img src={reshob} />
                    </div>
                  </div>
                  <span class='flex-grow flex flex-col pl-4'>
                    <span class='title-font font-medium text-gray-900'>
                      Rezwan Nayem
                    </span>
                    <span class='text-gray-500 text-sm'>
                      Front End Developer
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class='p-4 md:w-1/2 w-full'>
              <div class='h-full bg-gray-100 p-8 rounded'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  class='block w-5 h-5 text-orange-400 mb-4'
                  viewBox='0 0 975.036 975.036'>
                  <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                </svg>
                <p class='leading-relaxed mb-6'>
                  I love the app experience. Very easy to use but I would love
                  it even more with unlimited{" "}
                  <span className='text-orange-400 text-xl font-bold italic mr-1'>
                    Hungry Naki
                  </span>
                  {"    "}
                  vouchers to use and can buy different foods from different
                  stores. Hope you compromise this feature in the future.
                </p>
                <a class='inline-flex items-center'>
                  <div className='avatar'>
                    <div className='w-12 rounded-full'>
                      <img src={riyad} />
                    </div>
                  </div>
                  <span class='flex-grow flex flex-col pl-4'>
                    <span class='title-font font-medium text-gray-900'>
                      Rafatul Islam
                    </span>
                    <span class='text-gray-500 text-sm'>Student</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
