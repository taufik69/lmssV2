import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // sing with google
  const handelSinginWithGoogle = () => {
    createUserWithGoogleAuthProvider()
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  // const handelFormSubmit = (e) => {
  //   e.preventDefault();
  //   sinInWithEmail(email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       navigate("/");
  //       console.log(user);
  //     })
  //     .catch((error) => console.error(error));
  // };

  /**
   * @HandleLogin function thats take a private api
   * @param({}) nothing pass argumnet in this function
   * @api :https://ex-3academy.com//account/api/register/
   */

  const HandleLogin = async (e) => {
    try {
      e.preventDefault();
      let loginData = await axios.post(
        "https://ex-3academy.com/account/api/login/",
        {
          username: username,
          password: password,
        }
      );
      const { data } = loginData;
      /**
       * todo : set authectication token in localStorage
       */

      if (data) {
        localStorage.setItem("UserToken", JSON.stringify(data));
        toast.success(`login sucessfull`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      const { error } = err.response.data;
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <img src="/logo/LOGO.png" className="h-24 mr-3" alt="Logo" />
          </Link>
          <div className="w-full bg-white rounded-lg shadow sm:max-w-md ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form
                // onSubmit={(e) => handelFormSubmit(e)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    UserName
                  </label>
                  <input
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div className="flex items-center justify-end">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  onClick={HandleLogin}
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center d"
                >
                  Sign in
                </button>

                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/register"}
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Register
                  </Link>
                </p>
              </form>
              <button
                onClick={() => {
                  handelSinginWithGoogle();
                }}
                className="flex items-center justify-center w-full text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <img
                  className="mr-3"
                  width="25"
                  height="25"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                />
                Sign with google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
