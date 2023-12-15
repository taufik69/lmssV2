import React, { useEffect, useState } from "react";
import DesktopCard from "../Cards/DesktopCard/DesktopCard";
import SubjectCard from "../Cards/SubjectCard/SubjectCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const Subjects = ({ classRank }) => {
  const [classSubject, setclassSubject] = useState([]);
  const [aboveSix, setaboveSix] = useState([]);
  const [belowSix, setbelowSix] = useState([]);
  const { classId } = useParams();

  useEffect(() => {
    const allsubject = async () => {
      const Classdata = await axios.get(
        "https://ex-3academy.com/lms/subjects/"
      );
      setclassSubject(Classdata.data);
    };

    allsubject();

    /**
     * todo  : this map function working filtering the subcatgories data and store the title
     */

    let belowSixArr = [];
    let aboveSixArr = [];

    classSubject.map((item, index) => {
      if (item.subCategory[index] <= 6) {
        belowSixArr.push(item.subject_title);
      } else {
        aboveSixArr.push(item.subject_title);
      }
    });

    setaboveSix(aboveSixArr);
    setbelowSix(belowSixArr);
  }, [classRank]);

  return (
    <div className="max-w-screen-xl mx-auto pb-4">
      <div className="text text-center">
        <h2 className="font-semibold text-3xl">বিষয়ভিত্তিক ফ্রি ভিডিও</h2>
      </div>
      <div>
        <div className="mt-4 flex gap-2 flex-wrap justify-center">
          {classId.split("-")[1] >= 9
            ? aboveSix.map((item) => <SubjectCard subject={item} />)
            : belowSix.map((item) => <SubjectCard subject={item} />)}
        </div>
        <div className="flex gap-5 mt-20 flex-col md:flex-row">
          <DesktopCard />
          <DesktopCard />
        </div>
      </div>
    </div>
  );
};

export default Subjects;
