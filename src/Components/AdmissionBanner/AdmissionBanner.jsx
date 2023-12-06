import React from "react";
import Button from "../../Components/Extra/Button";
import Title from "../../Components/Titles/Title";

export const AdmissionBanner = () => {
  return (
    <>
      <div className="mt-20" id="admissionBanner">
        <div className="container mx-auto">
          <div className="max-w-screen-xl mx-auto py-10 md:rounded-2xl text-white">
            <Title
              title={
                "স্বপ্নের বিশ্ববিদ্যালয়ের প্রস্তুতি নাও টেন মিনিট স্কুলের সাথে"
              }
              slogan={
                "মেডিকেল কিংবা ভার্সিটি-গুচ্ছ প্রস্তুতি শুরুর আগেই নিজেকে যাচাই করো জাতীয় পর্যায়ের ফ্রি অনলাইন পরীক্ষা DU & Medi Dreamers-এ!"
              }
            />
            <div className="flex justify-center">
              <Button text={"DU & Medi Dreamers"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
