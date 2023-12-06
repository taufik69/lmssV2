import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {
    createUserWithGoogleAuthProvider,
    createUserwithEmail,
    updateUserProfile,
    emailVerification,
  } = useContext(authContext);

  // handel name
  const handelName = (e) => {
    setFullName(e.target.value);
  };
  // handel emailon change
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  //handelPass

  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  // sing with google
  // const handelSinginWithGoogle = () => {
  //   createUserWithGoogleAuthProvider()
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       navigate("/");
  //       console.log(user);
  //     })
  //     .catch((error) => console.error(error));
  // };

  const handelSinginWithGoogle = (e) => {
    e.preventDefault();
    createUserwithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserProfile({
          displayName: fullName,
        });
        emailVerification().then(alert("Please check your Email"));
        navigate("/");
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  /**
   * @HandleRegister function thats take a private api
   * @param({}) nothing pass argumnet in this function
   * @api :https://ex-3academy.com//account/api/register/
   */

  const handleRegistration = async (e) => {
    try {
      e.preventDefault();
      let registerData = await axios.post(
        "https://ex-3academy.com/account/api/register/",
        {
          username: fullName,
          email: email,
          password: password,
        }
      );
      const { username } = registerData.data;
      if (username) {
        toast.success(`${username} Registration sucessfull`, {
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
        navigate("/login");
      }, 2000);
    } catch (err) {
      const { username } = err.response.data;
      toast.error(username[0], {
        position: "top-right",
        autoClose: 3000,
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
        autoClose={3000}
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
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Register your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your Full Name
                  </label>
                  <input
                    onChange={(e) => {
                      handelName(e);
                    }}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Mir Faisal Ahmad"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => {
                      handelEmail(e);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    onChange={(e) => handelPassword(e)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={handleRegistration}
                >
                  Register
                </button>

                <p className="text-sm font-light text-gray-500 ">
                  Already have an account yet?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign in
                  </Link>
                </p>
              </form>
              <button
                onClick={handelSinginWithGoogle}
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

export default Register;
