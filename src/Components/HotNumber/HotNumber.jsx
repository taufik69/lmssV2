import React from "react";

export const HotNumber = () => {
  return (
    <div className="px-5">
      <div className="pt-5 pb-24">
        <div className="HotNumber max-w-screen-lg mx-auto bg-gray-500 rounded-3xl  py-20">
          <div className="title">
            <h1 className=" w-[259px] text-center text-base font-[600] leading-[22px] text-white md:w-full md:text-[26px] md:leading-[36px] ">
              পরীক্ষা সংক্রান্ত যেকোনো তথ্যের জন্য কল করুন{" "}
            </h1>
            <p className="mt-4 text-center text-[17px] font-[500] text-[#9CA3AF] md:text-[14px] md:leading-[18px]">
              সকাল ৮টা থেকে রাত ১১টা পর্যন্ত
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="tel:16910"
                className="mr-2 flex flex-row items-center gap-2 rounded bg-[#1CAB55] px-3 py-2 md:gap-3"
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M13.3557 5.7634C12.9194 5.68279 12.5186 5.96126 12.4355 6.38722C12.3525 6.81318 12.6318 7.22906 13.0563 7.31242C14.3344 7.56158 15.3212 8.5509 15.5714 9.83335V9.83427C15.6426 10.2034 15.9676 10.4718 16.3419 10.4718C16.3921 10.4718 16.4423 10.4673 16.4934 10.4581C16.9179 10.3729 17.1973 9.95794 17.1142 9.53106C16.7408 7.61563 15.2665 6.13623 13.3557 5.7634Z"
                    fill="white"
                  ></path>
                  <path
                    opacity="0.4"
                    d="M13.2984 2.57148C13.0939 2.54216 12.8885 2.60262 12.7251 2.7327C12.5571 2.86461 12.4521 3.05515 12.4293 3.26858C12.3809 3.70004 12.6922 4.09027 13.1231 4.13882C16.0946 4.47042 18.4043 6.78525 18.7384 9.76604C18.7831 10.1654 19.1182 10.4668 19.518 10.4668C19.5481 10.4668 19.5774 10.465 19.6075 10.4613C19.8165 10.4384 20.0028 10.3349 20.1342 10.17C20.2648 10.0051 20.3241 9.79993 20.3004 9.59016C19.8841 5.87105 17.0057 2.98461 13.2984 2.57148Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2513 12.6223C13.9079 16.278 14.7375 12.0488 17.0657 14.3754C19.3103 16.6193 20.6003 17.0689 17.7565 19.912C17.4002 20.1982 15.137 23.6424 7.18305 15.6906C-0.771854 7.73796 2.67029 5.47236 2.95664 5.11624C5.80738 2.26532 6.24921 3.56289 8.49378 5.80684C10.822 8.13441 6.5946 8.96667 10.2513 12.6223Z"
                    fill="white"
                  ></path>
                </svg>
                <span className="text-[14px] font-[600] leading-[21px] text-white md:text-[22px] md:font-[700] md:leading-[29px]">
                  16910
                </span>
              </a>
              <div className="border-l border-[#4B5563] pl-4">
                <p className="text-[10px] text-white md:text-base">এসএমএস</p>
                <p className="text-xs font-semibold text-white md:text-base">
                  10MSHelp to 26969
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
