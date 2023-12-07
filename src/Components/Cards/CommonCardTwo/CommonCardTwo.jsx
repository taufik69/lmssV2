import React from "react";
import { Link } from "react-router-dom";

export default function CommonCardTwo() {
  return (
    <>
      <Link>
        <div className="w-[300px] p-4 border rounded-md hover:border-green-500">
          <div className=" rounded-md overflow-hidden mb-4 relative">
            <img
              src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1000&format=pjpg&exif=0&iptc=0"
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
          <div className="text mt-5 h-[100px] flex flex-col justify-between">
            <h3 className="font-semibold text-lg pb-2">HSC 25 অনলাইন ব্যাচ</h3>
            <p className="text-green-600 font-semibold text-xl">
              <span>$</span> 4500
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
