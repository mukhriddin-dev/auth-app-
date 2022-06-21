import React, { useContext } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import context from "../context/context";

const PrivateRoute = () => {
  const {info:{isLogged}} = useContext(context);
  
  return (
    <>
      {isLogged ? (
        <Outlet />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default PrivateRoute;
