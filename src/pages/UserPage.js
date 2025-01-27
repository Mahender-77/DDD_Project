import React from "react";
// import { Signup } from "../components/Signup";
// import { Login } from "../components/Login";
import {Navbar} from "../components/Navbar";
import { AppRoutes } from "../AppRoutes";

export const UserPage = () => {
  return (
    <div >
      <Navbar/>
      <AppRoutes/>
    </div>
  );
};