import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const StudentReview = () => {
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
      <div id="StudentReview">
        <div className="max-w-screen-xl mx-auto py-20 hidden md:block">
          <h3 className="text-3xl font-semibold pb-6 leading-snug px-10 lg:px-0">
            কৃতী শিক্ষার্থীদের কথা
          </h3>
          <Slider {...settingsTwo} className="dreamslider text-white">
            <div>
              <Link className="flex justify-center w-full">
                <div className="mx-3">
                  <div className="relative rounded-md bg-whitepy-10 p-4  border border-slate-200">
                    <i className="fa-solid fa-quote-left h-10 w-10 bg-red-100 flex justify-center items-center rounded-full text-red-500 absolute top-0 left-5 translate-y-[-50%]"></i>
                    <iframe
                      style={{ width: "100%", height: "auto" }}
                      src="https://www.youtube.com/embed/Gr5k18jn5z8"
                      title="MIT College of Management(MIT COM) Students Reviews/Testimonials"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="mt-6">
                      <h4 className="text-xl text-slate-900 font-bold ">
                        Mir Faisal
                      </h4>
                      <p className="text-sm text-slate-600">
                        Teaching Assistant, Innova Infoys
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link className="flex justify-center w-full">
                <div className="mx-3">
                  <div className="relative rounded-md bg-whitepy-10 p-4  border border-slate-200">
                    <i className="fa-solid fa-quote-left h-10 w-10 bg-red-100 flex justify-center items-center rounded-full text-red-500 absolute top-0 left-5 translate-y-[-50%]"></i>
                    <iframe
                      style={{ width: "100%", height: "auto" }}
                      src="https://www.youtube.com/embed/Gr5k18jn5z8"
                      title="MIT College of Management(MIT COM) Students Reviews/Testimonials"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="mt-6">
                      <h4 className="text-xl text-slate-900 font-bold ">
                        Mir Faisal
                      </h4>
                      <p className="text-sm text-slate-600">
                        Teaching Assistant, Innova Infoys
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link className="flex justify-center w-full">
                <div className="mx-3">
                  <div className="relative rounded-md bg-whitepy-10 p-4  border border-slate-200">
                    <i className="fa-solid fa-quote-left h-10 w-10 bg-red-100 flex justify-center items-center rounded-full text-red-500 absolute top-0 left-5 translate-y-[-50%]"></i>
                    <iframe
                      style={{ width: "100%", height: "auto" }}
                      src="https://www.youtube.com/embed/Gr5k18jn5z8"
                      title="MIT College of Management(MIT COM) Students Reviews/Testimonials"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="mt-6">
                      <h4 className="text-xl text-slate-900 font-bold ">
                        Mir Faisal
                      </h4>
                      <p className="text-sm text-slate-600">
                        Teaching Assistant, Innova Infoys
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link className="flex justify-center w-full">
                <div className="mx-3">
                  <div className="relative rounded-md bg-whitepy-10 p-4  border border-slate-200">
                    <i className="fa-solid fa-quote-left h-10 w-10 bg-red-100 flex justify-center items-center rounded-full text-red-500 absolute top-0 left-5 translate-y-[-50%]"></i>
                    <iframe
                      style={{ width: "100%", height: "auto" }}
                      src="https://www.youtube.com/embed/Gr5k18jn5z8"
                      title="MIT College of Management(MIT COM) Students Reviews/Testimonials"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="mt-6">
                      <h4 className="text-xl text-slate-900 font-bold ">
                        Mir Faisal
                      </h4>
                      <p className="text-sm text-slate-600">
                        Teaching Assistant, Innova Infoys
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link className="flex justify-center w-full">
                <div className="mx-3">
                  <div className="relative rounded-md bg-whitepy-10 p-4  border border-slate-200">
                    <i className="fa-solid fa-quote-left h-10 w-10 bg-red-100 flex justify-center items-center rounded-full text-red-500 absolute top-0 left-5 translate-y-[-50%]"></i>
                    <iframe
                      style={{ width: "100%", height: "auto" }}
                      src="https://www.youtube.com/embed/Gr5k18jn5z8"
                      title="MIT College of Management(MIT COM) Students Reviews/Testimonials"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="mt-6">
                      <h4 className="text-xl text-slate-900 font-bold ">
                        Mir Faisal
                      </h4>
                      <p className="text-sm text-slate-600">
                        Teaching Assistant, Innova Infoys
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

//     <Slider {...settingsTwo} className="dreamslider text-white">
//               <CommonCardOne />
//               <CommonCardOne />
//               <CommonCardOne />
//               <CommonCardOne />
//               <CommonCardOne />
//               <CommonCardOne />
//               <CommonCardOne />
//             </Slider>

export default StudentReview;
