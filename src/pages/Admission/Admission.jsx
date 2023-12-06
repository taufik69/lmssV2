import React from "react";

import { AdmissionBanner } from "../../Components/AdmissionBanner/AdmissionBanner";
import LiveCourse from "../../Components/LiveCourse/LiveCourse";
import SuccessRate from "../../Components/SuccessRate/SuccessRate";
import StudentReview from "../../Components/StudentReview/StudentReview";
import AdmissionClass from "../../Components/AdmissionClass/AdmissionClass";
import { AdmissionTeacher } from "../../Components/AdmissionTeacher/AdmissionTeacher";
import Faq from "../../Components/FAQ/Faq";
import { HotNumber } from "../../Components/HotNumber/HotNumber";

const Admission = () => {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <AdmissionBanner/>
      <LiveCourse/>
      <SuccessRate/>
      <StudentReview/>
      <AdmissionClass/>
      <AdmissionTeacher/>
      <HotNumber/>
    </>
  );
};

export default Admission;
