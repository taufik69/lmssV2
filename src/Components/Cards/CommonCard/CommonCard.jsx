import React from "react";
import { Link } from "react-router-dom";

export default function CommonCard({ data }) {
  return (
    <>
      <Link>
        <div className="max-w-[400px] p-4 border rounded-md">
          <div className=" rounded-md overflow-hidden mb-4 relative">
            <img
              src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Flg%2Fimages%2Fthumb_01_1677411943238.jpeg&w=1080&q=75"
              alt=""
            />
            <div className="play absolute w-20 h-20 flex justify-center items-center bg-neutral-100 rounded-full z-10">
              <div className="w-10 h-10 bg-neutral-200 rounded-full flex justify-center items-center">
                <i
                  className="fa-solid fa-play"
                  style={{ color: "#ff3333" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="text">
            <h3 className="font-semibold text-lg pb-2">
              সব বিষয়ের প্রতি অধ্যায়েই হবে ইচ্ছেমত অনুশীলন
            </h3>
            <p className="text-gray-600">
              অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক প্রশ্ন
              অনুশীলনের সুযোগ।
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
