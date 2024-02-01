import React, { useState } from "react";

const RequirementField = ({
  name,
  label,
  register,
  errors,
  setValue,
  getValues,
}) => {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);

  const clickhandler = () => {
    if (requirement) {
      setRequirementList(...requirementList, requirement);
    }
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirementList = [...requirementList];
    updatedRequirementList.splice(index, 1);
    setRequirementList(updatedRequirementList);
  };

  useEffect(() => {
    register(name, { required: true });
  }, []);
  useEffect(() => {
    setValue(name, requirementList);
  }, [requirementList]);
  return (
    <div>
      <label>{label} </label>
      <input
        id={name}
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
      />
      <button onClick={clickhandler}>add</button>

      {errors[name] && <span>{label} is required</span>}

      {requirementList.length > 0 && (
        <ul>
          {requirementList.map((requirement, index) => {
            return (
              <li key={index}>
                <span>{requirement}</span>
                <button
                  className=""
                  type="button"
                  onClick={() => handleRemoveRequirement(index)}
                >
                  clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RequirementField;
