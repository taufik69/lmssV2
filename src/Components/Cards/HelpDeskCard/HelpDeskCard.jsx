import React from "react";

export default function HelpDeskCard() {
  return (
    <>
      <div className="informationBg flex flex-col md:flex-row mx-3 md:mx-0  justify-between md:py-8 md:px-16 p-5  rounded-2xl mt-10">
        <div>
          <h2 className="text-white md:text-3xl text-2xl font-bold mt-5 mb-2 md:mb-0 md:leading-[48px]">
            কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য কল করুন
          </h2>
          <p className="text-base text-slate-200">
            সকাল ৮টা থেকে রাত ১১টা পর্যন্ত
          </p>
        </div>
        <div>
          <div className="bg-green-500 mt-4 py-3 md:w-40 flex justify-center items-center space-x-3 text-white rounded hover:bg-green-600">
            <i className="fa-solid fa-phone"></i>
            <span className="pt-1">16524</span>
          </div>
        </div>
      </div>
    </>
  );
}
