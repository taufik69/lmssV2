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
                src="https://media.istockphoto.com/id/1128571392/photo/self-development-motivational-words-quotes-concept.jpg?s=612x612&w=0&k=20&c=UGtd_Udk2a5jc3UiLyvYHlseKwPUZDV2J54d7FLR9Zg="
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
