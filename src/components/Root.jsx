import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const TopicsContext = createContext([]);

const Root = () => {
    const topicsItems = useLoaderData();

  return (
    <TopicsContext.Provider value={topicsItems}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </TopicsContext.Provider>
  );
};

export default Root;
