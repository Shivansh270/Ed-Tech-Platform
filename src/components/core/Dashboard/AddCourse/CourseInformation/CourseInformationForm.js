import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../../../services/operations/courseDetailsAPI";
import { useForm } from "react-hook-form";
import { categories } from "../../../../../services/apis";

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

  function onSubmit() {
    return;
  }
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
          {errors.courseName && <span>error</span>}
        </div>
        <div>
          <label>category</label>
          <select
            id="courseCategory"
            {...register("courseCategory", { required: true })}
          >
            <option value="" disabled>
              choose a category
            </option>
            {!loading &&
              courseCategories.map((v, index) => {
                return <option key={index}>{v?.name}</option>;
              })}
          </select>
        </div>

        <div>
          <label>benifits of course</label>
        </div>
      </form>
    </div>
  );
};

export default CourseInformationForm;
