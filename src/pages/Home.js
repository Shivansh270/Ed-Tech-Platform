import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div>
      {/*Section 1*/}

      <div className="group backdrop:relative mx-auto flex flex-col items-center w-11/12 max-w-maxContent text-white justify-between">
        <Link to={"/signup"}>
          <div className="mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 w-fit hover:scale-95 mt-16 p-1">
            <div className="flex flex-row items-center px-10 py-[5px] rounded-full transition-all duration-200 group-hover:bg-richblack-900">
              Become an Instructor
              <BsArrowRightShort />
            </div>
          </div>
        </Link>
        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future with <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[90%] text-center text-large font-bold">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.{" "}
        </div>

        <div className="flex gap-7 mt-8">
          <CTAButton linkto={"/signup"} active={true}>
            Learn more
          </CTAButton>
          <CTAButton linkto={"/home"}>Book a demo</CTAButton>
        </div>

        <div className="mx-3 my-12 shadow-blue-200">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/*Code Section 1*/}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your <HighlightText text={"coding skills"} /> with our
                online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
            codeColor={"text-yellow-25"}
          ></CodeBlocks>
        </div>

        {/*Code Section 2*/}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
            codeColor={"text-yellow-25"}
          ></CodeBlocks>
        </div>
        <ExploreMore />
      </div>

      {/*Code Section 2*/}

      <div className="bg-pure-greys-5">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white ">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <BsArrowRightShort />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-7">
          <div className="flex flex-row gap-8 mb-10 mt-[95px]">
            <div className="text-4xl font-semibold w-[45%]">
              Get the Skills you need for a
              <HighlightText text={"Job that is in demand"} />
            </div>

            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>

          <TimelineSection />

          <LearningLanguageSection />
        </div>
      </div>

      {/*Code Section 3*/}

      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
        <InstructorSection />

        <h2 className="text-center text-4xl font-semobold mt-10">
          review from Other Learners
        </h2>

        <ReviewSlider />
      </div>

      <div className="section-4"></div>
      <Footer />
    </div>
  );
};

export default Home;
