import { useContext, useEffect, useState } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";
import { authContext } from "../../../context/UserContext";
import "./navbar.css";
const Navbar1 = () => {
  const { url, setUrl } = useContext(authContext);
  const link = useLocation();
  // useEffect(() => {
  //   seturl(link);
  // }, []);
  // console.log(link.pathname);
  setUrl(link.pathname)
  const [show, setShow] = useState(false);
  const [classShow, setClassShow] = useState(false);
  const [skillShow, setSkillShow] = useState(false);
  const { user, logoutFromAccount } = useContext(authContext);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handelNavbar = () => {
    setShow(!show);
  };
  const handelClassShow = () => {
    setClassShow(!classShow);
  };

  const handelSkillhow = () => {
    setSkillShow(!skillShow);
  };

  useEffect(() => {
    if (windowSize.innerWidth < 768) {
      handelNavbar();
    }
  }, [url]);

  // console.log(windowSize.innerWidth);
  return (
    <>
      <nav
        id="navbar"
        className="bg-white border-gray-200 fixed w-full top-0 z-50"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to={"/"} className="flex items-center">
            <div className="flex items-center">
              <img src="/logo/LOGO.png" className=" w-24" alt="Logo" />
            </div>
          </NavLink>
          <button
            onClick={handelNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${show ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white">
              {/* <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  ক্লাস ৫-১২
                </Link>
              </li> */}
              <li id="class-button">
                <button
                  onClick={handelClassShow}
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                >
                  ক্লাস ৫-১২
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="class-dropdown"
                  className={`z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                >
                  <ul
                    className="py-2 text-gray-700 "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to={"class/class-5"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/class.png"
                            alt="class"
                          />
                          <span className="text-lg">ক্লাস ৫</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"class/class-6"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/class.png"
                            alt="class"
                          />
                          <span className="text-lg">ক্লাস ৬</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"class/class-7"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/class.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">ক্লাস ৭</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"class/class-8"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/class.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">ক্লাস ৮</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"class/class-9"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/class.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">ক্লাস ৯</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"class/class-10"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/class.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">ক্লাস ১০</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"class/class-hsc"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/class.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">এইচএসসি</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li id="skill-button">
                <button
                  onClick={handelSkillhow}
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                >
                  স্কিলস{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="skills-dropdown"
                  className={`z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                >
                  <ul
                    className="py-2 text-gray-700 "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to={"/skill"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/development-skill.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">অনলাইন ব্যাচ</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/skill"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/development-skill.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">অনলাইন ব্যাচ</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/skill"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/development-skill.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">অনলাইন ব্যাচ</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/skill"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/development-skill.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">অনলাইন ব্যাচ</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/skill"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/development-skill.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">অনলাইন ব্যাচ</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/skill"}
                        className="block px-4 py-4 hover:bg-gray-100"
                      >
                        <div className="flex gap-1 items-center">
                          <img
                            width="28"
                            height="28"
                            src="https://img.icons8.com/fluency/48/development-skill.png"
                            alt="development-skill"
                          />
                          <span className="text-lg">অনলাইন ব্যাচ</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  ভর্তি পরীক্ষা
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  চাকরি প্রস্তুতি
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  অনলাইন ব্যাচ
                </Link>
              </li>
              {user?.email ? (
                <button
                  onClick={() => logoutFromAccount()}
                  className="bg-black py-3 px-5 text-white rounded hover:bg-slate-950"
                >
                  লগ আউট
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-black py-3 px-5 text-white rounded hover:bg-slate-950"
                >
                  লগ-ইন
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );

  // return (
  //   // <!-- component -->
  //   // <!-- This is an example component -->
  //   <div className="max-w-screen-xl mx-auto">
  //     <nav className="border-gray-200">
  //       <div className="container mx-auto flex flex-wrap items-center justify-between">
  //         <NavLink to={"/"} className="flex items-center">
  //           <div className="flex items-center">
  //             <img src="/logo/LOGO.png" className=" w-24" alt="Logo" />
  //           </div>
  //         </NavLink>
  //         {/* <a href="#" className="flex">
  //           <svg
  //             className="h-10 mr-3"
  //             width="51"
  //             height="70"
  //             viewBox="0 0 51 70"
  //             fill="none"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <g clip-path="url(#clip0)">
  //               <path
  //                 d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z"
  //                 fill="#76A9FA"
  //               ></path>
  //               <path
  //                 d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z"
  //                 fill="#A4CAFE"
  //               ></path>
  //               <path
  //                 d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z"
  //                 fill="#1C64F2"
  //               ></path>
  //             </g>
  //             <defs>
  //               <clipPath id="clip0">
  //                 <rect width="51" height="70" fill="white"></rect>
  //               </clipPath>
  //             </defs>
  //           </svg>
  //           <span className="self-center text-lg font-semibold whitespace-nowrap">
  //             FlowBite
  //           </span>
  //         </a> */}
  //         <button
  //           data-collapse-toggle="mobile-menu"
  //           type="button"
  //           className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
  //           aria-controls="mobile-menu-2"
  //           aria-expanded="false"
  //         >
  //           <span className="sr-only">Open main menu</span>
  //           <svg
  //             className="w-6 h-6"
  //             fill="currentColor"
  //             viewBox="0 0 20 20"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               fill-rule="evenodd"
  //               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
  //               clip-rule="evenodd"
  //             ></path>
  //           </svg>
  //           <svg
  //             className="hidden w-6 h-6"
  //             fill="currentColor"
  //             viewBox="0 0 20 20"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               fill-rule="evenodd"
  //               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //               clip-rule="evenodd"
  //             ></path>
  //           </svg>
  //         </button>
  //         <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
  //           <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white">
  //             {/* <li>
  //               <Link
  //                 to="#"
  //                 className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
  //                 aria-current="page"
  //               >
  //                 ক্লাস ৫-১২
  //               </Link>
  //             </li> */}
  //             <li>
  //               <button
  //                 id="dropdownNavbarLink"
  //                 data-dropdown-toggle="dropdownNavbar1"
  //                 className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
  //               >
  //                 ক্লাস ৫-১২
  //                 <svg
  //                   className="w-2.5 h-2.5 ml-2.5"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 10 6"
  //                 >
  //                   <path
  //                     stroke="currentColor"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="m1 1 4 4 4-4"
  //                   />
  //                 </svg>
  //               </button>
  //               {/* <!-- Dropdown menu --> */}
  //               <div
  //                 id="dropdownNavbar1"
  //                 className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
  //               >
  //                 <ul
  //                   className="py-2 text-gray-700 "
  //                   aria-labelledby="dropdownLargeButton"
  //                 >
  //                   <li>
  //                     <Link
  //                       to={"class/class-5"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="class"
  //                         />
  //                         <span className="text-lg">ক্লাস ৫</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-6"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="class"
  //                         />
  //                         <span className="text-lg">ক্লাস ৬</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-7"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">ক্লাস ৭</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-8"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">ক্লাস ৮</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-9"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">ক্লাস ৯</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-10"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">ক্লাস ১০</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"class/class-hsc"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/class.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">এইচএসসি</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </li>
  //             <li>
  //               <button
  //                 id="dropdownNavbarLink"
  //                 data-dropdown-toggle="dropdownNavbar"
  //                 className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
  //               >
  //                 স্কিলস{" "}
  //                 <svg
  //                   className="w-2.5 h-2.5 ml-2.5"
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 10 6"
  //                 >
  //                   <path
  //                     stroke="currentColor"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="m1 1 4 4 4-4"
  //                   />
  //                 </svg>
  //               </button>
  //               {/* <!-- Dropdown menu --> */}
  //               <div
  //                 id="dropdownNavbar"
  //                 className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
  //               >
  //                 <ul
  //                   className="py-2 text-gray-700 "
  //                   aria-labelledby="dropdownLargeButton"
  //                 >
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                   <li>
  //                     <Link
  //                       to={"/skill"}
  //                       className="block px-4 py-4 hover:bg-gray-100"
  //                     >
  //                       <div className="flex gap-1 items-center">
  //                         <img
  //                           width="28"
  //                           height="28"
  //                           src="https://img.icons8.com/fluency/48/development-skill.png"
  //                           alt="development-skill"
  //                         />
  //                         <span className="text-lg">অনলাইন ব্যাচ</span>
  //                       </div>
  //                     </Link>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </li>
  //             <li>
  //               <Link
  //                 to="/admission"
  //                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
  //               >
  //                 ভর্তি পরীক্ষা
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to="#"
  //                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
  //               >
  //                 চাকরি প্রস্তুতি
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to="#"
  //                 className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
  //               >
  //                 অনলাইন ব্যাচ
  //               </Link>
  //             </li>
  //             {user?.email ? (
  //               <button
  //                 onClick={() => logoutFromAccount()}
  //                 className="bg-black py-3 px-5 text-white rounded hover:bg-slate-950"
  //               >
  //                 লগ আউট
  //               </button>
  //             ) : (
  //               <Link
  //                 to="/login"
  //                 className="bg-black py-3 px-5 text-white rounded hover:bg-slate-950"
  //               >
  //                 লগ-ইন
  //               </Link>
  //             )}
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  // );
};

export default Navbar1;
