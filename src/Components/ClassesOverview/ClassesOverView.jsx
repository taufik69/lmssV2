import { Link } from "react-router-dom";
import Slider from "react-slick";
import CommonCardOne from "../Cards/CommonCard/CommonCardOne";
import ClassGrupe from "../ClasssGrupe/ClassGrupe";
import Title from "../Titles/Title";
import "./classoverview.css";
const ClassesOverView = () => {
  // slider config

  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
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
      <div className="container mx-auto">
        <div className="max-w-screen-xl mx-auto pb-10 pt-32 md:rounded-2xl text-white">
          <Title
            title={"অনলাইন ব্যাচে ভর্তি চলছে!"}
            slogan={
              "শ্রেনি অনুযায়ী সপ্তাহে ৬-১০টি লাইভ ক্লাস, সাথে লেকচার শিট এবং নিয়মিত পরীক্ষার সুবিধা"
            }
          />
          {/* class grupe */}
          <ClassGrupe />

          <div className="text-center">
            <Link className="text-sm text-green-600" to={"/"}>
              অনলাইন ব্যাচ সম্পর্কে আরও জানুন{" "}
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>

          {/* skill development classes start*/}
          <div className="text my-10">
            <Title
              title={" স্কিল ডেভেলপমেন্টের নির্দিষ্ট কোর্সে দারুণ ছাড়!"}
              slogan={
                "পুরো মাস জুড়ে টেন মিনিট স্কুলের নির্দিষ্ট কোর্সসমূহ পেয়ে যান বিশেষ মূল্যে। এবার শেখার শুরু হোক টেন মিনিট স্কুলের সাথে!"
              }
            />
          </div>

          {/* skill development slider */}

          <div className="max-w-screen-lg mx-auto">
            <Slider {...config} className="skill-slider">
              <div className="card sm:px-2 md:px-3 lg:px-5">
                <CommonCardOne />
              </div>
              <div className="card">
                <CommonCardOne />
              </div>
              <div className="card">
                <CommonCardOne />
              </div>
              <div className="card">
                <CommonCardOne />
              </div>
              <div className="card">
                <CommonCardOne />
              </div>
              <div className="card">
                <CommonCardOne />
              </div>
            </Slider>
          </div>

          {/* skill development classes end*/}
        </div>
      </div>
    </>
  );
};

export default ClassesOverView;
