import React from "react";
import { useSelector } from "react-redux";
import IconBtn from "../../common/IconBtn";
import { Navigate } from "react-router-dom";

const MyProfile = () => {
  const user = useSelector((state) => state.profile);

  return (
    <div>
      <h1>My Profile</h1>

      {/* section 1 */}
      <div>
        <div>
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div>
            <p> {user?.firstName + " " + user?.lastName} </p>
            <p> {user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            Navigate("/dashboard/settings");
          }}
        />
      </div>
    </div>
  );
};

export default MyProfile;
