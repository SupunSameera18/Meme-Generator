import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <Icon icon="arcticons:memetastic" width="40" />
        <h1 className="my-3">Meme Generator</h1>
      </div>
      <p className="m-0">React Practice Project</p>
    </div>
  );
};

export default Header;
