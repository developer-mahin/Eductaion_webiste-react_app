import React from "react";
import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const QuizContext = createContext([]);

const Root = () => {
    const quizItems = useLoaderData([]);
  return (
    <QuizContext.Provider value={quizItems}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </QuizContext.Provider>
  );
};

export default Root;
