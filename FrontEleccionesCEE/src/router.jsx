import React, { lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


import Navbar from "./layouts/Navbar";
// import { getToken } from "./helpers/usuario";

//Not loged

const Login = lazy(() => import("./layouts/Login"));

//Loged
const Logout = lazy(() => import("./pages/Logout"));

const HomePage = lazy(() => import("./pages/HomePage"));
const Asambleas = lazy(() => import("./components/asambleas/Asamblea"));
const Alumnos = lazy(() => import("./components/alumnos/Alumnos"));


const RouterApp = () => {

    const isLoged = true;

  useEffect(() => {
   
  }, []);

  return <>{isLoged ? <LogedInRoutes /> : <NotLogedRoutes />}</>;
};

const NotLogedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};

const LogedInRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/asambleas" element={<Asambleas />} />
        <Route path="/alumnos" element={<Alumnos />} />


        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default RouterApp;
