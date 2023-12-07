import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";

const IsNotLoginUser = () => {
  const userLoginInfo = useSelector((item) => item.LoginSlice.loginState);
  const { access, refresh } = userLoginInfo;
  console.log("Not login route", access);
  return access ? <Navigate to="/" /> : <Login />;
};

export default IsNotLoginUser;
