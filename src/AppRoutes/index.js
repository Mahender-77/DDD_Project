import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import Resistration from "../components/Register";

export const AppRoutes = () => {
    return (
      <div>
        <RouterRoutes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Resistration/>}/>
        </RouterRoutes>
      </div>
    );
};