import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Admission from "./pages/Admission/Admission";
import Class from "./pages/Classes/Class";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivateRoute from "./private/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayouts />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          path: "/class/:classId",
          element: <Class />,
        },
        {
          path: "/skill",
          element: <Admission />,
        },
        {
          element: (
            <PrivateRoute>
              <Admission />
            </PrivateRoute>
          ),
          path: "/admission",
        },
        {
          element: <Register />,
          path: "/register",
        },
      ],
    },
    {
      element: <Login />,
      path: "/login",
    },
  ]);
  return (
    // <>
    //   <Routes>
    //     <Route path="/" element={<MainLayouts />}>
    //       <Route index element={<Home />} />
    //       <Route path="/admission" element={<Admission />} />
    //     </Route>
    //     {/* <Route path="/registration" element={<Registration />} /> */}
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </>
    <>
      {/* route provider */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
