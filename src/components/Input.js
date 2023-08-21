import React from "react";

const Input = (props) => {
  return (
    <div className="input-group">
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        placeholder={props.placeholder}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      ></input>
    </div>
  );
};

export default Input;
