import React from "react";
import {Navbar} from "../components/Navbar";
import { AppRoutes } from "../AppRoutes";
import { useLocation } from "react-router-dom";

export const UserPage = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div >
      {!isLoginPage  && <Navbar/>}
      <AppRoutes/>
    </div>
  );
};