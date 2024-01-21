import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeProfilePicture = () => {
  const user = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  const fileInputRef = useRef(null);
  return (
    <div>
      <div>
        <img
          src={previewSource || user?.image}
          alt={`profile-${user?.firstName}`}
        />
      </div>
    </div>
  );
};

export default ChangeProfilePicture;
