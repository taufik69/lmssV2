import React from "react";
import { Link } from "react-router-dom";

export default function CommentCard() {
  return (
    <>
      <div>
        <Link className="flex justify-center w-full">
          <div className="mx-3">
            <div className="relative rounded-md bg-whitepy-10 py-8 px-6 border border-slate-200">
              <i className="fa-solid fa-quote-left h-10 w-10 bg-red-100 flex justify-center items-center rounded-full text-red-500 absolute top-0 left-5 translate-y-[-50%]"></i>
              <p className="text-[#444444]">
                কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে,
                “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার জন্য
                Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে ভালো
                লেগেছে “Writing Part”।
              </p>
              <div className="mt-6">
                <h4 className="text-xl text-slate-900 font-bold ">
                  Mir Faisal
                </h4>
                <p className="text-sm text-slate-600">
                  Teaching Assistant, Innova Infoys
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
