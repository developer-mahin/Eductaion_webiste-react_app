import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto capitalize">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">We</span>
            </span>{" "}
            are discussing three different topics of React.js
          </h2>
        </div>
        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              11 October 2020
            </p>
            <h2
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Nori grape silver beet broccoli kombu beet"
            >
              What is the purpose of react-router?
            </h2>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              <b>React Router</b> is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </p>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              11 October 2020
            </p>
            <h2
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Well, the way they make shows is, they make one"
            >
              How does context API work?
            </h2>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              <b>Context </b> provides a way to pass data through the component
              tree without having to pass props down manually at every level.
              <br />
              In a typical React application, data is passed top-down via props,
              but such usage can be cumbersome for certain types of props that
              are required by many components within an application. Context
              provides a way to share values
            </p>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              11 October 2020
            </p>
            <h2
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Pommy ipsum smeg head whizz morris himer due"
            >
              How does work useRef Hook?
            </h2>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              <b>useRef</b> returns a mutable ref object whose .current property is
              initialized to the passed argument ( initialValue ). The returned
              object will persist for the full lifetime of the component.
              Essentially, useRef is like a “box” that can hold a mutable value
              in its .current property
            </p>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default Blog;
