import Slider from "react-slick";
import CommonCardThree from "../Cards/CommonCardThree/CommonCardThree";
import Button from "../Extra/Button";

const SliderNav = () => {
  const settingsOne = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
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
        <h2> Multiple items </h2>
        <Slider {...settingsOne} className="text-white">
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">
                Language Learning Courses
              </p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">Language Courses</p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">Language Courses</p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">
                Language Learning Courses
              </p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">Courses</p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">
                Language Learning Courses
              </p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">
                Language Learning Courses
              </p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
        </Slider>
      </div>
      <div>
        <h2> Multiple items </h2>
        <Slider {...settingsTwo} className="text-white">
          <CommonCardThree />
          <CommonCardThree />
          <CommonCardThree />
          <CommonCardThree />
          <CommonCardThree />
          <CommonCardThree />
        </Slider>
      </div>
      <div>
        <Button text={"সকল কোর্স"} />
      </div>
    </>
  );
};

export default SliderNav;
