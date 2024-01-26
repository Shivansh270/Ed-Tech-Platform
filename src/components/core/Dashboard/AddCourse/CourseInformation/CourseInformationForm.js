import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../../../services/operations/courseDetailsAPI";
import { useForm } from "react-hook-form";

const CourseInformationForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { editCourse, course } = useSelector((state) => state.course);
  const [loading, setLoading] = useState();
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories?.length > 0) {
        setCourseCategories(categories);
      }
      setLoading(false);
    };
    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }

    getCategories();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>enter name</label>
          <input
            id="courseName"
            className="w-full"
            {...register("courseName", { required: true })}
          />
        </div>
      </form>
    </div>
  );
};

export default CourseInformationForm;
