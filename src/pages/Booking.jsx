import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed grid grid-cols-2 justify-center items-center mx-auto">
      <div className="mx-auto max-w-screen-xl pl-10">
        <h2 className="font-display text-8xl text-white">Cox's bazar</h2>
        <p className="font-display text-base text-white">
          Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known
          for its very long, sandy beachfront, stretching from Sea Beach in the
          north to Kolatoli Beach in the south. Aggameda Khyang monastery is
          home to bronze statues and centuries-old Buddhist manuscripts. South
          of town, the tropical rainforest of Himchari National Park has
          waterfalls and many birds. North, sea turtles breed on nearby Sonadia
          Island.
        </p>
      </div>
      <div className="bg-white mr-12 my-40 p-7 rounded-md">
        <form>
          <div className="">
            <label
              className="block mb-2 text-sm font-medium text-slate-400 dark:text-white"
            >
              Origin
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Dhaka"
              required
            />
          </div>
          <div className="">
            <label
              className="block mb-2 text-sm font-medium text-slate-400 dark:text-white"
            >
              Destination
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cox's Bazar"
              required
            />
            <div className="flex gap-4 mt-2">
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-slate-400 dark:text-white"
                >
                  From
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="01"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-medium text-slate-400 dark:text-white"
                >
                  To
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="05"
                  required
                />
              </div>
            </div>
          </div>
          <Link to='/resort'><button className="px-8 py-4 w-full bg-yellow-500 rounded-md font-semibold text-center">
          Start Booking
        </button></Link>
        </form>
      </div>
    </div>
  );
};

export default Booking;
