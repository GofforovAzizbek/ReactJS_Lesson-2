import React from "react";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import card4 from "../../assets/card4.svg";

const Cards = () => {
  return (
    <div className="container mx-auto  py-19.5 px-29.5 flex max-w-285 justify-between items-center">
      <img src={card1} alt="" />
      <img src={card2} alt="" />
      <img src={card3} alt="" />
      <img src={card4} alt="" />
    </div>
  );
};

export default Cards;
