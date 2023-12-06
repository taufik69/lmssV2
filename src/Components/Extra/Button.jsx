import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text }) {
  return (
    <>
      <Link>
        <div className="flex justify-center md:mt-8 mt-4">
          <div className="bg-green-500 py-3 w-56 flex justify-center items-center space-x-3 text-white rounded hover:bg-green-600">
            <span className="pt-1">{text}</span>
            <i className="fa-regular fa-chevron-right"></i>
          </div>
        </div>
      </Link>
    </>
  );
}
