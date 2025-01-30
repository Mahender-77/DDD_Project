import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import {CodeEditor} from "../components/CodeEditer";
import { Design } from "../components/Design";


export const AppRoutes = () => {
    return (
      <div>
        <RouterRoutes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/codeEditer" element={<CodeEditor/>}/>
          <Route path="/design" element={<Design/>}/>
        </RouterRoutes>
      </div>
    );
};