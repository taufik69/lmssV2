import React from "react";
import { Link } from "react-router-dom";

export default function CommonCardThree() {
  return (
    <>
      <div>
        <Link className="flex justify-center w-full">
          <div className="w-[300px] overflow-hidden   border border-transparent rounded-md hover:border-green-500">
            <div className=" relative">
              <img
                src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                alt=""
              />
            </div>
            <div className="text h-[100px] flex flex-col justify-between bg-slate-800 p-4">
              <h3 className="font-semibold text-lg pb-2">
                HSC 25 অনলাইন ব্যাচ
              </h3>
              <p className="text-green-600 font-semibold text-xl">
                <span>$</span> 4500
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
