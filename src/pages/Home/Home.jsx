// import Announcement from "../../Components/Announcement/Announcement";
import AnnuallyOnlineClass from "../../Components/AnnuallyOnlineClass/AnnuallyOnlineClass";
import ClassesOverView from "../../Components/ClassesOverview/ClassesOverView";
import DoItYours from "../../Components/DIY/DoItYours";
import DreamUniversity from "../../Components/DreamUniversity/DreamUniversity";
import FirstChoice from "../../Components/FirstChoice/FirstChoice";
import { JobPreparation } from "../../Components/JobPreparation/JobPreparation";
import JoinNow from "../../Components/JoinNow/JoinNow";
import Skills from "../../Components/Skills/Skills";
import SscAndHsc from "../../Components/SscAndHsc/SscAndHsc";
import "./home.css";

const Home = () => {
  return (
    <>
      {/* class lession start */}
      <section id="ClassesOverView">
        <ClassesOverView />
      </section>
      {/* class lession end */}

      {/* DIY */}
      <section id="doityours" className="bg-[#f4f7fb]">
        <DoItYours />
      </section>
      {/* DIY */}

      {/* annually online class start */}
      <section>
        <AnnuallyOnlineClass />
      </section>
      {/* annually online class end*/}

      {/* hsc and ssc start */}
      <section id="sccandhsc" className="bg-[#f4f7fb]">
        <SscAndHsc />
      </section>
      {/* hsc and ssc end */}

      {/* skills section start */}
      <section id="skills" className="bg-black">
        <Skills />
      </section>
      {/* skills section end */}

      {/* DreamUniversity section start */}
      <section id="DreamUniversity">
        <DreamUniversity />
      </section>
      {/* DreamUniversity section end */}

      {/* job preparation section start */}
      <section id="JobPreparation">
        <JobPreparation />
      </section>
      {/* job preparation section end */}

      {/* FirstChoice section start */}
      <section id="FirstChoice">
        <FirstChoice />
      </section>
      {/* FirstChoice section end */}

      {/* JoinNow section start */}
      <section id="JoinNow">
        <JoinNow />
      </section>
      {/* JoinNow section end */}
    </>
  );
};

export default Home;
