import MainLayouts from "./layouts/MainLayouts";
import Admission from "./pages/Admission/Admission";
import Class from "./pages/Classes/Class";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import IsLoginUser from "./private/isLogin";
import IsNotLoginUser from "./private/IsNotLogin";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<IsLoginUser />}>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />} />
          </Route>
        </Route>

        <Route element={<IsNotLoginUser />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
