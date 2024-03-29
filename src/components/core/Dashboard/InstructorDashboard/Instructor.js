import React from "react";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { fetchInstructorCourses } from "../../../../services/operations/courseDetailsAPI";
import { getInstructorData } from "../../../../services/operations/profileAPI";
import { useSelector } from "react-redux";

const Instructor = () => {
  const [loading, setLoading] = useState(false);
  const [instructorData, setInstructorData] = useState([]);
  const [courses, setCourses] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const getCourseDataWithStats = async () => {
      setLoading(true);

      const instructorApiData = await getInstructorData(token);
      const result = await fetchInstructorCourses(token);

      console.log(instructorApiData);

      if (instructorApiData.length) setInstructorData(instructorApiData);

      if (result) {
        setCourses(result);
      }
      setLoading(false);
    };
    getCourseDataWithStats();
  }, []);

  return <div>Instructor</div>;
};

export default Instructor;
