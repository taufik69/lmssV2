import React from "react";

const ClassBanner = ({ classRank, subtitle }) => {
  console.log(classRank);
  return (
    <div className="bg-gray-900 mb-14 py-10 w-full overflow-hidden mt-20">
      <div className="max-w-screen-xl h-full mx-auto items-center flex justify-between relative">
        <div className="text pl-5 text-white h-full flex flex-col justify-center">
          <h2 className="text-2xl pb-5 font-semibold">{ classRank }</h2>
          <p>
            লেখাপড়ায় এক ভিন্ন মাত্রা যোগ করতে থাকছে রেকর্ডেড/লাইভ প্রোগ্রামসহ
            আরো অনেক কিছু
          </p>
        </div>
        <div>
          <img
            className=" w-40 hidden md:block absolute top-1 right-0"
            src="https://d1yreyj8btzg0t.cloudfront.net/images/pro/icons/hsc.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ClassBanner;
