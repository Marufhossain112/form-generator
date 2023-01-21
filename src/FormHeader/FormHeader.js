import React from "react";
import "./FormHeader.css";
const FormHeader = () => {
  return (
    <div className="form-header">
      <div>
        <p>Create a new Form</p>
      </div>
      <div>
        <img
          src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FormHeader;
