import CommonCard from "../Cards/CommonCard/CommonCard";
import Button from "../Extra/Button";
import Title from "../Titles/Title";
import TitleTag from "../Titles/TitleTag";
import "./annuallyonlineClass.css";
// import Button from "../Extra/button";
import useFetchAPI from "../../CustomFetcher/CustomFetchHooks";
import ReactPlayer from "react-player/lazy";

const AnnuallyOnlineClass = () => {
  const classVedio = useFetchAPI("https://ex-3academy.com/lms/videos/");

  return (
    <>
      <div className="py-20">
        <TitleTag
          tag={"ক্লাস ৬-১০"}
          icon={
            "https://img.icons8.com/fluency-systems-filled/96/228BE6/backpack.png"
          }
          color={"#228BE6"}
        />
        <div className="max-w-screen-xl mx-auto h-full">
          <Title
            title={"বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে?"}
            slogan={
              "সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক পড়াশুনার অগ্রযাত্রা"
            }
          />
          <div className="flex md:justify-between justify-center gap-y-3 flex-wrap  py-10 md:px-0 px-3">
            {classVedio.data?.map((item) => (
              <iframe
                src={item.link}
                width={450}
                height={300}
                frameborder="0"
              ></iframe>
            ))}
          </div>
        </div>
        <div>
          <Button text={"আপনার ক্লাস বেছে নিন"} />
        </div>
      </div>
    </>
  );
};

export default AnnuallyOnlineClass;
