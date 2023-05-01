import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-center bg-fixed grid grid-cols-2">
      <div className="mx-auto max-w-screen-xl pl-10">
        <h2 className="font-display text-8xl text-white">Cox's bazar</h2>
        <p className="font-display text-base text-white">
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <Link to='/booking'><button className="px-8 py-4 bg-yellow-400 rounded-md flex gap-2 items-center">
          Booking <ArrowRightIcon className="h-6 w-6 text-black" />{" "}
        </button></Link>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Banner;
