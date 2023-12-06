import Button from "../../Extra/Button";

const DesktopCard = ({ course, topBarData }) => {
  return (
    <>
      <div className="px-3 md:px-0">
        <div className="flex items-center md:items-start text-center md:text-left flex-col md:flex-row flex-[2_2_0%] border border-[#E5E7EB] bg-white p-5 rounded-lg">
          <div className="flex-1 flex flex-col justify-between mr-1">
            <div>
              <h1 className="max-w-[280px] w-full text-lg font-semibold leading-7 mb-3">
                HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)
              </h1>
              <ul>
                <li className="flex justify-center md:justify-start items-center mb-2">
                  <img
                    src="https://cdn.10minuteschool.com/images/k-12-courses/pdp_icon_subject_upup.png"
                    className="w-[14px]"
                  />
                  <h2 className="ml-3 text-sm font-normal md:font-medium text-[#4B5563]">
                    ৮ টি বিষয়
                  </h2>
                </li>
                <li className="flex justify-center md:justify-start items-center mb-2">
                  <img
                    src="https://cdn.10minuteschool.com/images/k-12-courses/pdp_icon_live_upup.png"
                    className="w-[14px]"
                  />
                  <h2 className="ml-3 text-sm font-normal md:font-medium text-[#4B5563]">
                    প্রতি সপ্তাহে ১২ টি লাইভ ক্লাস
                  </h2>
                </li>
              </ul>
            </div>
            <div className="w-40 hidden md:block">
              <Button text={"বিস্তারিত দেখো"} />
            </div>
          </div>
          <div className="max-w-[250px] flex-col md:flex-row w-full flex-1 flex justify-end items-center">
            {/* <img
          src={course?.sqr_img}
          alt="online batch"
          className="max-w-[230px] rounded-lg"
        /> */}
            <img
              alt="online batch"
              loading="lazy"
              width="230"
              height="230"
              decoding="async"
              data-nimg="1"
              className="w-[230px] rounded-lg"
              src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
              style={{ color: "transparent" }}
            />
            <div className="w-40 md:hidden block">
              <Button text={"বিস্তারিত দেখো"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopCard;
