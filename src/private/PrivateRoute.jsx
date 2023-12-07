import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  // if (isLoading) {
  //   return <Loading />;
  // }
  // if (user && user.uid) {
  //   return <>{children}</>;
  // }
  // return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
