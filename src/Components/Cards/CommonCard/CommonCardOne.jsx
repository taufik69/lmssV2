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
                src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                alt=""
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
