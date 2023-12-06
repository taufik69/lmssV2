import Slider from "react-slick";
import CommonCardOne from "../Cards/CommonCard/CommonCardOne";
import Button from "../Extra/Button";
import Title from "../Titles/Title";
import TitleTag from "../Titles/TitleTag";

const DreamUniversity = () => {
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
      <div className="dreamuniversity">
        <div className=" pt-24 md:pb-32 pb-10 max-w-screen-xl mx-auto">
          <TitleTag
            tag={"ভর্তি পরীক্ষা"}
            icon={
              "https://img.icons8.com/ios-glyphs/30/c68de3/graduation-cap--v1.png"
            }
            color={"#c056f5"}
          />
          <Title
            title={"স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি"}
            slogan={
              "ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের পথ এখানেই।"
            }
          />
          <div className="mt-7">
            <Slider {...settingsTwo} className="dreamslider text-white">
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
            </Slider>
          </div>
          <div className="flex justify-center md:mt-12">
            <Button text={"সকল কোর্স"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DreamUniversity;
