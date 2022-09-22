import React from "react";
import "./formDetails.css";
import { useState } from "react";

function FormDetails(props) {
  const { label, onChange, id, errorMessage, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  // console.log(errorMessage);
  return (
    <div className="ele">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => {
          inputProps.name === "confirmPassword" && setFocused(true);
        }}
        focused={focused.toString()}
      />
      <small>{errorMessage}</small>
    </div>
  );
}

export default FormDetails;
