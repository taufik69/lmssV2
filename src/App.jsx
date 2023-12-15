import MainLayouts from "./layouts/MainLayouts";
import Admission from "./pages/Admission/Admission";
import Class from "./pages/Classes/Class";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import IsLoginUser from "./private/isLogin";
import IsNotLoginUser from "./private/IsNotLogin";
import { SkillsPage } from "./pages/Skills/SkillsPage";
import Jobpreparationpage from "./pages/jobPreparation/Jobpreparationpage";
import OnlineBatch from "./pages/OnlineBatch/OnlineBatch";
import AddmissonTest from "./pages/AdmissonTest/AddmissonTest";

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
            <Route path="/Admission" element={<Admission />} />
            <Route path="/অনলাইন ব্যাচ" element={<OnlineBatch />} />
            <Route path="/ভর্তি পরীক্ষা" element={<AddmissonTest />} />
            <Route path="/class/:classId" element={<Class />} />
            <Route path="/স্কিলস" element={<SkillsPage />} />
            <Route path="/চাকরি প্রস্তুতি" element={<Jobpreparationpage />} />
          </Route>
        </Route>

        <Route element={<IsNotLoginUser />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<h1> page not found </h1>} />
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
