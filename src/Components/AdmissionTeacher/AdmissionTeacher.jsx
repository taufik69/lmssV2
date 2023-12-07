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
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="https://scontent.fdac88-1.fna.fbcdn.net/v/t39.30808-6/384512392_338384242080061_5880688869275712686_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFFoM98TJF2aL8tvS-VmX_9HHHpWUKbxaMccelZQpvFo4g_4zZDMw8bb17Ka_MXgiuhT-qk-s0xi6sQ0-QRvuaA&_nc_ohc=PGWaj0QP36EAX-vWABq&_nc_ht=scontent.fdac88-1.fna&oh=00_AfBPcHd0DvGdkUrqv8W7vJvzykzVeXy7iIAnPsPUKyO4jA&oe=657773B7"
                          alt=""
                        />
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
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="https://scontent.fdac88-1.fna.fbcdn.net/v/t39.30808-6/384512392_338384242080061_5880688869275712686_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFFoM98TJF2aL8tvS-VmX_9HHHpWUKbxaMccelZQpvFo4g_4zZDMw8bb17Ka_MXgiuhT-qk-s0xi6sQ0-QRvuaA&_nc_ohc=PGWaj0QP36EAX-vWABq&_nc_ht=scontent.fdac88-1.fna&oh=00_AfBPcHd0DvGdkUrqv8W7vJvzykzVeXy7iIAnPsPUKyO4jA&oe=657773B7"
                          alt=""
                        />
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
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="https://scontent.fdac88-1.fna.fbcdn.net/v/t39.30808-6/384512392_338384242080061_5880688869275712686_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFFoM98TJF2aL8tvS-VmX_9HHHpWUKbxaMccelZQpvFo4g_4zZDMw8bb17Ka_MXgiuhT-qk-s0xi6sQ0-QRvuaA&_nc_ohc=PGWaj0QP36EAX-vWABq&_nc_ht=scontent.fdac88-1.fna&oh=00_AfBPcHd0DvGdkUrqv8W7vJvzykzVeXy7iIAnPsPUKyO4jA&oe=657773B7"
                          alt=""
                        />
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
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="https://scontent.fdac88-1.fna.fbcdn.net/v/t39.30808-6/384512392_338384242080061_5880688869275712686_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFFoM98TJF2aL8tvS-VmX_9HHHpWUKbxaMccelZQpvFo4g_4zZDMw8bb17Ka_MXgiuhT-qk-s0xi6sQ0-QRvuaA&_nc_ohc=PGWaj0QP36EAX-vWABq&_nc_ht=scontent.fdac88-1.fna&oh=00_AfBPcHd0DvGdkUrqv8W7vJvzykzVeXy7iIAnPsPUKyO4jA&oe=657773B7"
                          alt=""
                        />
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
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="https://scontent.fdac88-1.fna.fbcdn.net/v/t39.30808-6/384512392_338384242080061_5880688869275712686_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFFoM98TJF2aL8tvS-VmX_9HHHpWUKbxaMccelZQpvFo4g_4zZDMw8bb17Ka_MXgiuhT-qk-s0xi6sQ0-QRvuaA&_nc_ohc=PGWaj0QP36EAX-vWABq&_nc_ht=scontent.fdac88-1.fna&oh=00_AfBPcHd0DvGdkUrqv8W7vJvzykzVeXy7iIAnPsPUKyO4jA&oe=657773B7"
                          alt=""
                        />
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
