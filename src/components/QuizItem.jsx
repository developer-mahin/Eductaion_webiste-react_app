import React from "react";
import { Link } from "react-router-dom";

const QuizItem = ({ item }) => {
  console.log(item);
  const { id, logo, name, total } = item;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-20">
      <div className="max-w-md lg:max-w-screen-lg sm:row-gap-10  xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48 bg-slate-500">
            <img
              src={logo}
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">{name}</div>
            </div>
            <Link
              to="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-cyan-400 hover:bg-cyan-500 focus:shadow-outline focus:outline-none"
            >
              Start Practice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
