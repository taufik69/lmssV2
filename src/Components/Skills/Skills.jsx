import ConnectedBrand from "../ConnectedBrand/ConnectedBrand";
import SliderNav from "../SkillSlider/SliderNav";
import Title from "../Titles/Title";
import TitleTag from "../Titles/TitleTag";
const Skills = () => {
  return (
    <>
      <div className="max-w-screen-xl py-20 mx-auto">
        <TitleTag
          tag={"স্কিলস"}
          icon={"https://img.icons8.com/ios-filled/28/FAB005/rocket.png"}
          color={"#FAB005"}
        />
        <Title title={"দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম"} color={"#fff"} />
        <div className="flex flex-wrap justify-around  md:w-[600px] mx-auto px-7">
          <div className="flex items-center">
            <i
              className="fa-solid fa-circle-check me-3"
              style={{ color: "#6d9cee" }}
            ></i>
            <p className="text-white">দেশসেরা শিক্ষক</p>
          </div>
          <div className="flex items-center">
            <i
              className="fa-solid fa-circle-check me-3"
              style={{ color: "#6d9cee" }}
            ></i>
            <p className="text-white">দেশসেরা শিক্ষক</p>
          </div>
          <div className="flex items-center">
            <i
              className="fa-solid fa-circle-check me-3"
              style={{ color: "#6d9cee" }}
            ></i>
            <p className="text-white">দেশসেরা শিক্ষক</p>
          </div>
        </div>
        <div>
          <SliderNav />
        </div>
        <div>
          <ConnectedBrand />
        </div>
      </div>
    </>
  );
};

export default Skills;
