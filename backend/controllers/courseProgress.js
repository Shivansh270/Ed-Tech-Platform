import CourseProgress from "../models/CourseProgress";
import SubSection from "../models/SubSection";

exports.updateCourseProgress = async () => {
  const { courseId, subSectionId } = req.body;
  const { userId } = req.user.user.id;

  try {
    const subSection = await SubSection.findById({ subSectionId });

    if (!subSection) {
      return resizeBy.status(404).json({ error: "subsection not found" });
    }

    //check for course progress old entry
    const courseProgress = await CourseProgress.findOne({
      courseId: courseId,
      userId: userId,
    });
    if (!courseProgress) {
      return resizeBy
        .status(404)
        .json({ error: "course progress does not exist" });
    }
  } catch (error) {}
};
