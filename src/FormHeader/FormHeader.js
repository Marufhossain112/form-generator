import React from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import "./FormHeader.css";
const FormHeader = () => {
  const navigate = useNavigate();
  const createForm = () => {
    const id = uuid();
    console.log(id);
    navigate(`/form/${id}`);
  };
  return (
    <div className="form-header">
      <div>
        <p>Create a new Form</p>
      </div>
      <div className="create-icon" onClick={createForm}>
        <img
          src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FormHeader;
