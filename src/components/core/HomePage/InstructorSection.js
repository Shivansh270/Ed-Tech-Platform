import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { BsArrowRightShort } from "react-icons/bs";
import Instructor from "../../../assets/Images/Instructor.png";

const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-row gap-20 items-center">
        <div className="w-[50%]">
          <img src={Instructor} alt="instructor" className="shadow-white" />
        </div>

        <div className="w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semobold w-[50%]">
            Become an <HighlightText text={"Instructor"} />
          </div>
          <p className="font-medium text-[16px] w-[80%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className="w-fit">
            <CTAButton linkto={"/signup"} active={true}>
              <div className="flex flex-row gap-2 items-center">
                Start Teaching Today
                <BsArrowRightShort />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
