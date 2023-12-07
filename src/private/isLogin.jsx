import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login/Login";

const IsLoginUser = () => {
  const userLoginInfo = useSelector((item) => item.LoginSlice.loginState);
  const { access, refresh } = userLoginInfo;
  console.log("login route", access);
  return access ? <Outlet /> : <Login />;
};

export default IsLoginUser;
