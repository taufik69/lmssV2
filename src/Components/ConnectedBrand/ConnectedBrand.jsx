import { Link } from "react-router-dom";
import {
  Apex,
  Brac,
  Ipdc,
  Samsung,
  Unilever,
  UnitedGroup,
} from "../Brands/Brand";

const ConnectedBrand = () => {
  return (
    <>
      <div className="bg-slate-900 py-10 px-6 mt-9 rounded-2xl md:mx-0 mx-3">
        <p className="text-center text-xl text-slate-50 mb-8 ">
          দেশের সেরা প্রতিষ্ঠানগুলো নিচ্ছে আমাদের কর্পোরেট স্কিলস ডেভেলপমেন্ট
          প্রোগ্রাম
        </p>
        <div className="flex justify-around flex-wrap">
          <Unilever className="grayscale" />
          <Samsung />
          <Brac />
          <Ipdc />
          <Apex />
          <UnitedGroup />
        </div>
        <p className="text-center text-base mt-6 text-slate-50 ">
          আরও জানতে <Link className="text-green-600 underline">ইমেইল করুন</Link>{" "}
          অথবা <Link className="text-green-600 underline">কল করুন</Link>
        </p>
      </div>
    </>
  );
};

export default ConnectedBrand;
