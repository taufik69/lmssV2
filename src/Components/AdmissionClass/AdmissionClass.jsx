import React from "react";

const AdmissionClass = () => {
  return (
    <>
      <div className="pt-10 pb-24 hidden md:block overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-3xl font-semibold pb-6 leading-snug px-10 lg:px-0">
            এডমিশনের ক্লাসগুলো টেন মিনিট স্কুলে কেমন হয়, দেখে নাও
          </h3>

          <div className="flex justify-between px-2 overflow-hidden">
            <div className="order-2 border border-gray-200 w-[40%] rounded-xl overflow-hidden">
              <ul
                className="flex flex-col flex-wrap -mb-px text-sm font-medium text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li
                  className=" border-b-2 border-gray-200 "
                  role="presentation"
                >
                  <button
                    className=" w-full p-4 rounded-t-lg flex gap-3 items-center"
                    id="video-1"
                    data-tabs-target="#video1"
                    type="button"
                    role="tab"
                    aria-controls="video1"
                    aria-selected="true"
                  >
                    <img
                      className="h-11 rounded"
                      src="/customAssets/tabImage02.jpg"
                      alt="tabImage02"
                    />
                    <div className="text-left">
                      <h5 className="text-xs font-medium text-[#111827] md:truncate md:text-sm md:text-[#4B5563]">
                        ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স ২০২৩
                      </h5>
                      <span className="hidden text-xs text-gray-600 md:block">
                        Course Trailer
                      </span>
                    </div>
                  </button>
                </li>
                <li
                  className=" border-b-2 border-gray-200 "
                  role="presentation"
                >
                  <button
                    className="w-full p-4 rounded-t-lg flex gap-3 items-center"
                    id="video-2"
                    data-tabs-target="#video2"
                    type="button"
                    role="tab"
                    aria-controls="video2"
                    aria-selected="false"
                  >
                    <img
                      className="h-11 rounded"
                      src="/customAssets/tabImage.jpg"
                      alt="tabImage"
                    />
                    <div className="text-left">
                      <h5 className="text-xs font-medium text-[#111827] md:truncate md:text-sm md:text-[#4B5563]">
                        ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স ২০২৩
                      </h5>
                      <span className="hidden text-xs text-gray-600 md:block">
                        Course Trailer
                      </span>
                    </div>
                  </button>
                </li>
                <li className="border-b-2 border-gray-200 " role="presentation">
                  <button
                    className="w-full p-4 rounded-t-lg flex gap-3 items-center "
                    id="video3"
                    data-tabs-target="#video3"
                    type="button"
                    role="tab"
                    aria-controls="video3"
                    aria-selected="false"
                  >
                    <img
                      className="h-11 rounded"
                      src="/customAssets/tabImage02.jpg"
                      alt="tabImage02"
                    />
                    <div className="text-left">
                      <h5 className="text-xs font-medium text-[#111827] md:truncate md:text-sm md:text-[#4B5563]">
                        ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স ২০২৩
                      </h5>
                      <span className="hidden text-xs text-gray-600 md:block">
                        Course Trailer
                      </span>
                    </div>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    className="w-full p-4 rounded-t-lg flex gap-3 items-center "
                    id="video4"
                    data-tabs-target="#video4"
                    type="button"
                    role="tab"
                    aria-controls="video4"
                    aria-selected="false"
                  >
                    <img
                      className="h-11 rounded"
                      src="/customAssets/tabImage.jpg"
                      alt="tabImage"
                    />
                    <div className="text-left">
                      <h5 className="text-xs font-medium text-[#111827] md:truncate md:text-sm md:text-[#4B5563]">
                        ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স ২০২৩
                      </h5>
                      <span className="hidden text-xs text-gray-600 md:block">
                        Course Trailer
                      </span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div id="myTabContent" className="order-1 w-[58%]	">
              <div
                className="rounded-lg  "
                id="video1"
                role="tabpanel"
                aria-labelledby="video-1"
              >
                <iframe
                  className="h-96 rounded-2xl"
                  style={{ width: "100%", border: "0" }}
                  src="https://www.youtube.com/embed/Gr5k18jn5z8"
                  title="MIT College of Management(MIT COM) Students Reviews/Testimonials"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h5 className="py-[18px] text-lg font-semibold leading-[30px] md:flex md:text-[21px]">
                  ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স ২০২৩
                </h5>
              </div>
              <div
                className="hidden rounded-lg  "
                id="video2"
                role="tabpanel"
                aria-labelledby="video-2"
              >
                <iframe
                  className="h-96 rounded-2xl"
                  style={{ width: "100%", border: "0" }}
                  src="https://www.youtube.com/embed/qRLnFt7A7Qc"
                  title="MIT College of Management(MIT COM) Students Reviews/Testimonials"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h5 className="py-[18px] text-lg font-semibold leading-[30px] md:flex md:text-[21px]">
                  Medical Admission Course 2023
                </h5>
              </div>
              <div
                className="hidden rounded-lg "
                id="video3"
                role="tabpanel"
                aria-labelledby="video-3"
              >
                <iframe
                  className="h-96 rounded-2xl"
                  style={{ width: "100%", border: "0" }}
                  src="https://www.youtube.com/embed/He4WpKm1kM8"
                  title="MIT College of Management(MIT COM) Students Reviews/Testimonials"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h5 className="py-[18px] text-lg font-semibold leading-[30px] md:flex md:text-[21px]">
                  C Unit ভার্সিটি + গুচ্ছ এডমিশন কোর্স ২০২৩
                </h5>
              </div>
              <div
                className="hidden rounded-lg  "
                id="video4"
                role="tabpanel"
                aria-labelledby="video-4"
              >
                <iframe
                  className="h-96 rounded-2xl"
                  style={{ width: "100%", border: "0" }}
                  src="https://www.youtube.com/embed/Gr5k18jn5z8"
                  title="MIT College of Management(MIT COM) Students Reviews/Testimonials"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h5 className="py-[18px] text-lg font-semibold leading-[30px] md:flex md:text-[21px]">
                  Medical Admission Course 2023
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionClass;
