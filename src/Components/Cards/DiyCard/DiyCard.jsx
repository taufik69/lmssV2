import React from "react";

export default function DiyCard({ title, subtitle }) {
  return (
    <>
      <div className="w-[500px] border md:p-6 p-4 flex items-center bg-white rounded-md hover:border-green-500">
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/emoji/96/backpack-emoji.png"
          alt="backpack-emoji"
        />
        <div className="text w-full text-left md:ps-3">
          <p className="md:text-2xl text-lg py-2">
            {title}
            ক্লাস ৫-১২
          </p>
          <p className="text-md">
            {subtitle}
            ফ্রি ভিডিও, লাইভ ক্লাস
          </p>
        </div>
        <i className="fa-regular fa-chevron-right"></i>
      </div>
    </>
  );
}
