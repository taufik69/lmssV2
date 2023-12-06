import React from "react";
import CommonCardTwo from "../../Components/Cards/CommonCardTwo/CommonCardTwo";

const LiveCourse = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className=" mt-20">
          <h3 className="text-3xl font-semibold pb-6 leading-snug px-10 lg:px-0">
            লাইভ কোর্সসমূহ
          </h3>
          <div className="flex justify-center  md:justify-between flex-wrap px-10 lg:px-0">
            <CommonCardTwo />
            <CommonCardTwo />
            <CommonCardTwo />
            <CommonCardTwo />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-semibold pb-6 leading-snug px-10 lg:px-0">
            রেকর্ডেড কোর্সসমূহ
          </h3>
          <div className="flex justify-center  md:justify-between flex-wrap px-10 lg:px-0">
            <CommonCardTwo />
            <CommonCardTwo />
            <CommonCardTwo />
            <CommonCardTwo />
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveCourse;
