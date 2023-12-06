import CommonCardTwo from "../Cards/CommonCardTwo/CommonCardTwo";
import Button from "../Extra/Button";
import Title from "../Titles/Title";
import TitleTag from "../Titles/TitleTag";

const SscAndHsc = () => {
  return (
    <>
      <div className="py-20">
        <TitleTag
          tag={"SSC & HSC"}
          icon={
            "https://img.icons8.com/fluency-systems-filled/96/228BE6/backpack.png"
          }
          color={"#228BE6"}
        />

        <div className="max-w-screen-xl mx-auto h-full">
          <Title title={"SSC ও HSC শিক্ষার্থীদের জন্য"} />
          <div className="flex md:justify-between justify-center gap-y-3 flex-wrap py-10">
            {/* item 1 */}
            <CommonCardTwo />
            <CommonCardTwo />
            <CommonCardTwo />
            <CommonCardTwo />
          </div>
        </div>
        {/* button */}
        <Button text={"আপনার ক্লাস বেছে নিন"} />
      </div>
    </>
  );
};

export default SscAndHsc;
