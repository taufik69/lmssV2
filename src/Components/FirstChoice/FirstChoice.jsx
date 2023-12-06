import React from "react";
import Slider from "react-slick";
import CommentCard from "../Cards/CommentCard/CommentCard";
import ResourseDownloadCard from "../Cards/ResourseDownloadCard/ResourseDownloadCard";
import Title from "../Titles/Title";

const FirstChoice = () => {
  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
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
        <div className=" pt-24 max-w-screen-xl mx-auto">
          <Title title={"কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?"} />
          <div>
            <Slider {...settingsTwo} className="dreamslide">
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </Slider>
          </div>
          <ResourseDownloadCard />
        </div>
      </div>
    </>
  );
};

export default FirstChoice;
