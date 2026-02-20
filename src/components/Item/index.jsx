import React from "react";
import navbarArrow from "../../assets/nav-b-arrow.svg";

const Li = ({ title }) => {
  return (
    <li>
      <a href="" className="flex gap-1.25">
        {title} <img src={navbarArrow} alt="" />
      </a>
    </li>
  );
};

export default Li;
