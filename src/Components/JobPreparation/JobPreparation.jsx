import React from "react";
import Slider from "react-slick";
import CommonCardOne from "../Cards/CommonCard/CommonCardOne";
import Button from "../Extra/Button";
import Title from "../Titles/Title";

export const JobPreparation = () => {
  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <div className=" pt-24  max-w-screen-xl mx-auto">
          <div className="text flex justify-center">
            <h3 className=" text-lg font-semibold flex items-center text-[#3b82f6]">
              <i className="fa-solid fa-briefcase text-xl text-[#7eaffd] mr-4"></i>
              চাকরি প্রস্তুতি
            </h3>
          </div>
          <div className="mb-10">
            <Title
              title={"সরকারি চাকরির সর্বোচ্চ প্রস্তুতি"}
              slogan={
                " বিসিএস কিংবা ব্যাংকে চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!"
              }
            />
          </div>
          <div>
            <Slider {...settingsTwo} className="dreamslider text-white">
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
            </Slider>
          </div>
          <Button text={"সকল কোর্স"} />
        </div>
      </div>
    </>
  );
};
