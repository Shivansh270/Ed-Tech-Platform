import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDropdownMenu } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDownArrow } from "react-icons/bi";
// import { AiOutlinePlus } from "react-icons/ai";
// import SubSectionModal from "./SubSectionModal";
// import ConfirmationModal from "../../../../common/ConfirmationModal";

const NestedView = ({ handleChangeEditSectionName }) => {
  const { token } = useSelector((state) => state.auth);
  const { course } = useSelector((state) => state.course);

  const [addSubSection, setAddSubSection] = useState(null);
  const [viewSubSection, setViewSubSection] = useState(null);
  const [editSubSection, setEditSubSection] = useState(null);

  return (
    <div>
      {course?.courseConent?.map((section) => {
        return (
          <details key={section._id} open>
            <summary className="flex items-center justify-between gap-x-3 border-b-2">
              <div className="flex items-center gap-x-3">
                <RxDropdownMenu />
                <p>{section.sectionName}</p>
              </div>
              <div className=" flex items-center gap-x-3">
                <button
                  onClick={() =>
                    handleChangeEditSectionName(
                      section._id,
                      section.sectionName
                    )
                  }
                >
                  <MdEdit />
                </button>

                <button
                  onClick={() => {
                    setConfirmationModal({
                      text1: "Delete this Section",
                      text2: "All the lectures in this section wil be deleted",
                      btn1Text: "Delete",
                      btn2Text: "Cancel",
                      btn1Handler: () => handleDeleteSection(section._id),
                      btn2Handler: () => setConfirmationModal(null),
                    });
                  }}
                >
                  <RiDeleteBin6Line />
                </button>
                <span>|</span>
                <BiDownArrow className={`text-xl text-richblack-300`} />
              </div>
            </summary>
          </details>
        );
      })}
    </div>
  );
};

export default NestedView;
