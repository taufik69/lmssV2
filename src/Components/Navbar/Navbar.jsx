import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useFetchAPI from "../../CustomFetcher/CustomFetchHooks";
import "./navbar.css";

const Navbar1 = () => {
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [classShow, setClassShow] = useState(false);
  const [skillShow, setSkillShow] = useState(false);

  /**
   * todo : Fetching catagoreis Data catagories means menu item
   * @API : https://ex-3academy.com/lms/categories/
   */
  const catagoreyData = useFetchAPI("https://ex-3academy.com/lms/categories/");

  /**
   * todo : Fetching catagoreis Data class ranked
   * @API : https://ex-3academy.com/lms/classes-rank/
   */
  const classRankedData = useFetchAPI(
    "https://ex-3academy.com/lms/classes-rank/"
  );

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
  const handelClassShow = (item) => {
    console.log(item);
    setClassShow(!classShow);
    if (item == "All Classes") {
      Navigate("class/class-5");
    } else {
      Navigate(`${item}`);
    }
  };

  const handelSkillhow = () => {
    setSkillShow(!skillShow);
  };

  useEffect(() => {
    if (windowSize.innerWidth < 768) {
      handelNavbar();
    }
  }, []);

  /**
   * TODO : Handlelogout
   * @function Handlelogout  () {}
   * todo : perform logout functionlaity . just delete the local stroage data
   */
  const Handlelogout = () => {
    const confrimData = confirm("are you sure we logout");
    if (confrimData) {
      localStorage.removeItem("UserToken");
      window.location.reload();
    }
  };

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
              {catagoreyData.data?.map((item) =>
                item.category_title === "All Classes" ? (
                  <li id="class-button" key={item.id}>
                    <button
                      onClick={() => handelClassShow(item.category_title)}
                      id="dropdownNavbarLink"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                    >
                      {item.category_title}
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
                        {classRankedData.data?.map((subitem) => (
                          <li key={subitem.id}>
                            <Link
                              to={`class/class-${3 + subitem.id}`}
                              className="block px-4 py-4 hover:bg-gray-100"
                            >
                              <div className="flex gap-1 items-center">
                                <img
                                  width="28"
                                  height="28"
                                  src="https://img.icons8.com/fluency/48/class.png"
                                  alt="class"
                                />
                                <span className="text-lg">
                                  {subitem.class_title}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li id="class-button" key={item.id}>
                    <button
                      onClick={() => handelClassShow(item.category_title)}
                      id="dropdownNavbarLink"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                    >
                      {item.category_title}
                    </button>
                  </li>
                )
              )}

              <button
                onClick={Handlelogout}
                className="bg-black py-3 px-5 text-white rounded hover:bg-slate-950"
              >
                লগ আউট
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
