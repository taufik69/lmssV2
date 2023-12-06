import React from "react";
import Title from "../Titles/Title";

const SuccessRate = () => {
  return (
    <>
      <div id="admissionBanner">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto pt-10 pb-16 md:rounded-2xl text-white">
            <Title
              className="!max-w-full"
              title={"২০২২ সালে টেন মিনিট স্কুলের এডমিশন সাফল্য"}
              slogan={"২০২২ এর সাফল্যই ২০২৩ এর অনুপ্রেরণা"}
            />
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div className='  text-center className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#2fd7fd42] p-4 py-2 text-white   md:py-8'>
                <h2 className="ext-2xl font-semibold  md:mb-[14px] md:text-[56px] md:leading-[44px]">
                  ৯,৩৮৬
                </h2>
                <p className="text-sm font-medium leading-[30px] md:text-xl">
                  মোট শিক্ষার্থী
                </p>
              </div>
              <div className='  text-center className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#32fa4642] p-4 py-2 text-white   md:py-8'>
                <h2 className="ext-2xl font-semibold  md:mb-[14px] md:text-[56px] md:leading-[44px]">
                  ৮০০+
                </h2>
                <p className="text-sm font-medium leading-[30px] md:text-xl">
                  চান্সপ্রাপ্ত শিক্ষার্থী
                </p>
              </div>
              <div className='  text-center className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#fcba2d42] p-4 py-2 text-white   md:py-8'>
                <h2 className="ext-2xl font-semibold  md:mb-[14px] md:text-[56px] md:leading-[44px]">
                  ২৪
                </h2>
                <p className="text-sm font-medium leading-[30px] md:text-xl">
                  টপ ১০০-তে চান্সপ্রাপ্ত শিক্ষার্থী
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessRate;
