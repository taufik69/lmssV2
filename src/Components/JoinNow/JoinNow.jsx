import React from "react";
import HelpDeskCard from "../Cards/HelpDeskCard/HelpDeskCard";
import LearningBoxInfo from "../Cards/LearningBoxInfo/LearningBoxInfo";
import Button from "../Extra/Button";
import Title from "../Titles/Title";

const JoinNow = () => {
  const info = [
    {
      id: 1,
      bgcolor: "#E3FDF2",
      title: "1 কোটি +",
      subTitle: "মোট শিক্ষার্থী",
    },
    {
      id: 2,
      bgcolor: "#F9F7E6",
      title: "47 লক্ষ +",
      subTitle: "অ্যাপ ব্যবহারকারী",
    },
    {
      id: 3,
      bgcolor: "#FFF2F2",
      title: "3,000+",
      subTitle: "স্টাডি ম্যাটেরিয়াল",
    },
    {
      id: 4,
      bgcolor: "#EAE9F8",
      title: "24,000+",
      subTitle: "লার্নিং কন্টেন্ট",
    },
  ];
  return (
    <>
      <div className="pb-24">
        <div className=" pt-24 max-w-screen-xl mx-auto">
          <div className="joinTitle md:pb-24 pb-8 pt-10">
            <Title
              title={"আজই জয়েন করুন বাংলাদেশের সবচেয়ে বড় লার্নিং প্ল্যাটফর্মে"}
            ></Title>
            <Button text={"জয়েন করুন"} />
          </div>

          <div className="flex gap-x-6 px-3 md:px-0">
            <div className="md:w-[50%] w-full flex md:text-left text-center flex-wrap justify-between gap-y-6">
              {info.map((item) => (
                <LearningBoxInfo
                  key={item.id}
                  bgcolor={item.bgcolor}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              ))}
            </div>
            <div className="md:block hidden studyBg w-[50%] py-8"></div>
          </div>
          <HelpDeskCard />
        </div>
      </div>
    </>
  );
};

export default JoinNow;
