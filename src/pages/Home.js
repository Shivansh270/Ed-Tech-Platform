import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/CTAButton";

const Home = () => {
  return (
    <div>
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
          <CTAButton linkto={"/signup"}>Book a demo</CTAButton>
        </div>
      </div>

      <div className="section-2"></div>

      <div className="section-3"></div>

      <div className="section-4"></div>
    </div>
  );
};

export default Home;
