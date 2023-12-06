import React from "react";

export default function ResourseDownloadCard() {
  return (
    <>
      <div className="bestTeacher flex justify-between py-8 px-16 rounded-2xl mt-10 mx-3 md:mx-0">
        <div>
          <h2 className="text-white text-center md:text-left md:text-3xl text-xl font-bold max-w-[500px] mt-5 md:leading-[48px]">
            সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?
          </h2>
          <div className="bg-green-500 mt-4 py-3 w-56 flex justify-center items-center space-x-3 text-white rounded hover:bg-green-600">
            <span className="pt-1">ফ্রি ডাউনলোড করুন</span>
            <i className="fa-solid fa-download"></i>
          </div>
        </div>
        <div className="md:block hidden">
          <img
            className="h-44"
            src="./customAssets/notemain.png"
            alt="notemain.png"
          />
        </div>
      </div>
    </>
  );
}
