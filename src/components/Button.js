import React from "react";
import { Icon } from "@iconify/react";

const Button = (props) => {
  return (
    <div className="container">
      <button
        type="button"
        onClick={props.onClick}
        className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
      >
        <p className="m-0 fs-5">Get a new meme image</p>
        <Icon icon="bi:image-fill" width="20" />
      </button>
    </div>
  );
};

export default Button;
