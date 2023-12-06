import React from "react";

export default function Title({ title, slogan, color, className }) {
  return (
    <>
      <div className="mx-auto">
        <h2
          className={`max-w-[600px] px-6 mx-auto md:text-5xl text-2xl font-semibold text-center pt-1 md:pt-10 pb-2 md:pb-5 leading-snug ${className}`}
          style={{ color: color }}
        >
          {title}
        </h2>
        {slogan && (
          <p className="text-center px-6 md:text-base text-sm">{slogan}</p>
        )}
      </div>
    </>
  );
}
