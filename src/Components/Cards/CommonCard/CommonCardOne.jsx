import React from "react";
import { Link } from "react-router-dom";

export default function CommonCardOne() {
  return (
    <>
      <div>
        <Link className="flex justify-center w-full">
          <div className="w-[300px] overflow-hidden rounded-md ">
            <div className=" relative">
              <img
                src="https://thumbs.dreamstime.com/b/job-opportunity-24549521.jpg"
                alt="skill developement image"
              />
            </div>
            <div className="text h-[100px] flex flex-col justify-between bg-white p-4  border-x border-b border-gray-300 rounded-ee-md ">
              <h3 className="font-bold text-lg pb-2 text-slate-950">
                HSC 25 অনলাইন ব্যাচ
              </h3>
              <p className="text-green-600 text-sm">
                বিস্তারিত <i className="fa-sharp fa-regular fa-arrow-right"></i>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
