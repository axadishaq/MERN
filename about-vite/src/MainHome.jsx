import React from "react";
import { Home } from "./Home";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const MainHome = () => {
   return (
      <>
      <Navbar/>
         <Outlet />
      </>
   );
};
