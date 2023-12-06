import { Link } from "react-router-dom";

const ClassItem = ({ classLevel }) => {
  return (
    <>
      <div className="class-item max-w-[300px] py-5 text-black flex flex-col items-center justify-center grow bg-white rounded-lg border-2 border-transparent duration-150 hover:border-green-400 md:hover:-mt-4 md:hover:mb-4">
        <img
          className="mb-4"
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/backpack.png"
          alt="backpack"
        />
        <h2 className="font-bold text-center">{classLevel}</h2>
        <p className="class-info py-2 text-center text-xs">
          ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি
        </p>
        <Link
          className="mt-3 text-sm duration-100 hover:text-green-400"
          to={"/"}
        >
          ভর্তি হও
          <i className="fa-duotone fa-arrow-right ms-1"></i>
        </Link>
      </div>
    </>
  );
};

export default ClassItem;
