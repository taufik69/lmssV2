import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Title from "../Titles/Title";

export const AdmissionTeacher = () => {
  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="admissionTeacher bg-[#F8F5F2] pt-12 pb-24">
        <div className="max-w-screen-xl mx-auto">
          <Title className="!max-w-full" title={"এডমিশনের ক্লাস নিচ্ছে যারা"} />

          <div>
            <Slider {...settingsTwo} className="dreamslider text-white">
              <div>
                <Link className="flex justify-center w-full">
                  <div className="">
                    <div className=" bg-white  rounded-md bg-whitepy-10 p-4 flex flex-col items-center justify-center  border border-slate-300">
                      <div className="w-24 h-24 bg-slate-500 rounded-full">
                        <img src="" alt="" />
                      </div>

                      <div className="mt-6 text-center">
                        <h3 className="mb-[2px] mt-3 w-full px-1 text-center text-sm font-semibold md:px-[14px] md:text-base text-slate-900">
                          Taufik Islam
                        </h3>
                        <p className="mb-[2px] line-clamp-2 w-full px-4 text-center text-xs font-medium text-[#E66F3C] md:line-clamp-2 md:text-sm">
                          Oxford, DU
                        </p>
                        <p className="w-full px-4 text-center text-xs font-semibold text-[#4B5563] md:text-sm">
                          5 years+ teaching exp
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="">
                    <div className=" bg-white  rounded-md bg-whitepy-10 p-4 flex flex-col items-center justify-center  border border-slate-300">
                      <div className="w-24 h-24 bg-slate-500 rounded-full">
                        <img src="" alt="" />
                      </div>

                      <div className="mt-6 text-center">
                        <h3 className="mb-[2px] mt-3 w-full px-1 text-center text-sm font-semibold md:px-[14px] md:text-base text-slate-900">
                          Taufik Islam
                        </h3>
                        <p className="mb-[2px] line-clamp-2 w-full px-4 text-center text-xs font-medium text-[#E66F3C] md:line-clamp-2 md:text-sm">
                          Oxford, DU
                        </p>
                        <p className="w-full px-4 text-center text-xs font-semibold text-[#4B5563] md:text-sm">
                          5 years+ teaching exp
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="">
                    <div className=" bg-white  rounded-md bg-whitepy-10 p-4 flex flex-col items-center justify-center  border border-slate-300">
                      <div className="w-24 h-24 bg-slate-500 rounded-full">
                        <img src="" alt="" />
                      </div>

                      <div className="mt-6 text-center">
                        <h3 className="mb-[2px] mt-3 w-full px-1 text-center text-sm font-semibold md:px-[14px] md:text-base text-slate-900">
                          Taufik Islam
                        </h3>
                        <p className="mb-[2px] line-clamp-2 w-full px-4 text-center text-xs font-medium text-[#E66F3C] md:line-clamp-2 md:text-sm">
                          Oxford, DU
                        </p>
                        <p className="w-full px-4 text-center text-xs font-semibold text-[#4B5563] md:text-sm">
                          5 years+ teaching exp
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="">
                    <div className=" bg-white  rounded-md bg-whitepy-10 p-4 flex flex-col items-center justify-center  border border-slate-300">
                      <div className="w-24 h-24 bg-slate-500 rounded-full">
                        <img src="" alt="" />
                      </div>

                      <div className="mt-6 text-center">
                        <h3 className="mb-[2px] mt-3 w-full px-1 text-center text-sm font-semibold md:px-[14px] md:text-base text-slate-900">
                          Taufik Islam
                        </h3>
                        <p className="mb-[2px] line-clamp-2 w-full px-4 text-center text-xs font-medium text-[#E66F3C] md:line-clamp-2 md:text-sm">
                          Oxford, DU
                        </p>
                        <p className="w-full px-4 text-center text-xs font-semibold text-[#4B5563] md:text-sm">
                          5 years+ teaching exp
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="">
                    <div className=" bg-white  rounded-md bg-whitepy-10 p-4 flex flex-col items-center justify-center  border border-slate-300">
                      <div className="w-24 h-24 bg-slate-500 rounded-full">
                        <img src="" alt="" />
                      </div>

                      <div className="mt-6 text-center">
                        <h3 className="mb-[2px] mt-3 w-full px-1 text-center text-sm font-semibold md:px-[14px] md:text-base text-slate-900">
                          Taufik Islam
                        </h3>
                        <p className="mb-[2px] line-clamp-2 w-full px-4 text-center text-xs font-medium text-[#E66F3C] md:line-clamp-2 md:text-sm">
                          Oxford, DU
                        </p>
                        <p className="w-full px-4 text-center text-xs font-semibold text-[#4B5563] md:text-sm">
                          5 years+ teaching exp
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="">
                    <div className=" bg-white  rounded-md bg-whitepy-10 p-4 flex flex-col items-center justify-center  border border-slate-300">
                      <div className="w-24 h-24 bg-slate-500 rounded-full">
                        <img src="" alt="" />
                      </div>

                      <div className="mt-6 text-center">
                        <h3 className="mb-[2px] mt-3 w-full px-1 text-center text-sm font-semibold md:px-[14px] md:text-base text-slate-900">
                          Taufik Islam
                        </h3>
                        <p className="mb-[2px] line-clamp-2 w-full px-4 text-center text-xs font-medium text-[#E66F3C] md:line-clamp-2 md:text-sm">
                          Oxford, DU
                        </p>
                        <p className="w-full px-4 text-center text-xs font-semibold text-[#4B5563] md:text-sm">
                          5 years+ teaching exp
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="">
                    <div className=" bg-white  rounded-md bg-whitepy-10 p-4 flex flex-col items-center justify-center  border border-slate-300">
                      <div className="w-24 h-24 bg-slate-500 rounded-full">
                        <img src="" alt="" />
                      </div>

                      <div className="mt-6 text-center">
                        <h3 className="mb-[2px] mt-3 w-full px-1 text-center text-sm font-semibold md:px-[14px] md:text-base text-slate-900">
                          Taufik Islam
                        </h3>
                        <p className="mb-[2px] line-clamp-2 w-full px-4 text-center text-xs font-medium text-[#E66F3C] md:line-clamp-2 md:text-sm">
                          Oxford, DU
                        </p>
                        <p className="w-full px-4 text-center text-xs font-semibold text-[#4B5563] md:text-sm">
                          5 years+ teaching exp
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
