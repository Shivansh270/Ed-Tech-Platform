import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buyCourse } from "../services/operations/studentFeaturesAPI";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import GetAvgRating from "../utils/avgRating";
import Error from "./Error";
import ConfirmationModal from "../components/common/ConfirmationModal";
import RatingStars from "../components/common/RatingStars";
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard.js";
import { formatDate } from "../services/formatDate";

const CourseDetails = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [avgReviewCount, setAverageReviewCount] = useState(0);
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);

  useEffect(() => {
    const getCourseFullDetails = async () => {
      try {
        const result = await fetchCourseDetails(courseId);
        console.log("Printing CourseData-> ", result);
        setCourseData(result);
      } catch (error) {
        console.log("Could not fetch coursse details");
      }
    };
    getCourseFullDetails();
  }, [courseId]);

  useEffect(() => {
    const count = GetAvgRating(
      courseData?.data?.courseDetails.ratingAndReviews
    );
    setAverageReviewCount(count);
  }, [courseData]);

  useEffect(() => {
    let lectures = 0;
    courseData?.data?.CourseDetails?.courseContent.forEach((sec) => {
      lectures += sec.subSextion.length || 0;
    });
    setTotalNoOfLectures(lectures);
  }, [courseData]);

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal({
      text1: "you are not Logged in",
      text2: "Please login to purchase the course",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  if (loading || !courseData) {
    return <div>Loading...</div>;
  }

  if (!courseData.success) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  const {
    _id: course_id,
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentsEnrolled,
    createdAt,
  } = courseData.data?.courseDetails;

  return (
    <div className="flex flex-col  text-white">
      <div className="relative flex flex-col justify-start p-8">
        <p>{courseName}</p>
        <p>{courseDescription}</p>
        <div className="flex gap-x-2">
          <span>{avgReviewCount}</span>
          <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
          <span>{`(${ratingAndReviews.length} reviews) `}</span>
          <span>{`(${studentsEnrolled.length} students enrolled)`}</span>
        </div>
        <div>
          <p>Created By {`${instructor.firstName}`}</p>
        </div>

        <div className="flex gap-x-3">
          <p>Created At {formatDate(createdAt)}</p>
          <p> English</p>
        </div>

        <div>
          <CourseDetailsCard
            course={courseData?.data?.courseDetails}
            setConfirmationModal={setConfirmationModal}
            handleBuyCourse={handleBuyCourse}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
