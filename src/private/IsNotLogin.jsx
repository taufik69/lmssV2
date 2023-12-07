import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const IsNotLoginUser = () => {
  const userLoginInfo = useSelector((item) => item.LoginSlice.loginState);
  return userLoginInfo ? <Navigate to="/" /> : <Outlet />;
};

export default IsNotLoginUser;
