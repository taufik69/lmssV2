// import ClassItem from "../Cards/ClassItem/ClassItem";
import ClassItem from "../Cards/ClassItem/ClassItem";
import "./classgrupe.css";

const ClassGrupe = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-3  px-3 my-8">
        {/* class item*/}
        <ClassItem classLevel={"দ্বাদশ"} />
        <ClassItem classLevel={"১০ম শ্রেণী"} />
        <ClassItem classLevel={"৯ম শ্রেণী"} />
        <ClassItem classLevel={" ৮ম শ্রেণী "} />
        <ClassItem classLevel={" ৭ শ্রেণী "} />
        <ClassItem classLevel={" ৬ঠ শ্রেণী "} />
      </div>
    </>
  );
};

export default ClassGrupe;
