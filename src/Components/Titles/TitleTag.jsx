import React from "react";

export default function TitleTag({ tag, icon, color }) {
  return (
    <>
      <div className="text flex justify-center">
        <h3
          className=" text-lg font-semibold flex items-center"
          style={{ color: color }}
        >
          <img
            className="me-2"
            width="25"
            height="25"
            src={icon}
            alt="backpack"
          />
          {tag}
        </h3>
      </div>
    </>
  );
}
