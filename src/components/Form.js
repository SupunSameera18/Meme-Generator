import React from "react";
import Input from "./Input";

const Form = (props) => {
  return (
    <div className="container">
      <div className="d-flex gap-5 my-5">
        <Input
          value={props.inputOne}
          placeholder="Enter top text"
          onChange={(e) => props.setInputOne(e)}
        />
        <Input
          value={props.inputTwo}
          placeholder="Enter bottom text"
          onChange={(e) => props.setInputTwo(e)}
        />
      </div>
    </div>
  );
};

export default Form;
