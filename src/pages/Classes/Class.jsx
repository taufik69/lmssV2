import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClassBanner from "../../Components/ClassBanner/ClassBanner";
import Subjects from "../../Components/Subjects/Subjects";

const Class = () => {
  let { classId } = useParams();
  const [classRank, setClassRank] = useState("class-5");

  useEffect(() => {
    switch (classId) {
      case "class-5":
        setClassRank("পঞ্চম শ্রেনি");
        break;
      case "class-6":
        setClassRank("ষষ্ঠ শ্রেনি");
        break;
      case "class-7":
        setClassRank("সপ্তম শ্রেনি");
        break;
      case "class-8":
        setClassRank("অষ্টম শ্রেনি");
        break;
      case "class-9":
        setClassRank("নবম শ্রেনি");
        break;
      case "class-10":
        setClassRank("দশম শ্রেনি");
        break;
      case "class-11":
        setClassRank("এইচএসসি");
        break;

      default:
        break;
    }
  }, [classId]);
  return (
    <>
      <ClassBanner classRank={classRank} />
      <Subjects />
    </>
  );
};

export default Class;
