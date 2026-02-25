import React from "react";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import card4 from "../../assets/card4.svg";

const Cards = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-[75px] px-[115px] shadow-2xl">
      <a href="">
        <img src={card1} alt="" />
      </a>
      <a href="">
        <img src={card2} alt="" />
      </a>
      <a href="">
        <img src={card3} alt="" />
      </a>
      <a href="">
        <img src={card4} alt="" />
      </a>
    </div>
  );
};

export default Cards;
