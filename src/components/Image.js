import React from "react";

const Image = (props) => {
  return (
    <div className="container py-5 d-flex justify-content-center">
      <img className="meme-image" src={props.memeImage}></img>
    </div>
  );
};

export default Image;
