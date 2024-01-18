import React from "react";
import { useSelector } from "react-redux";

const ChangeProfilePicture = () => {
  const user = useSelector((state) => state.profile);
  return <div>ChangeProfilePicture</div>;
};

export default ChangeProfilePicture;
