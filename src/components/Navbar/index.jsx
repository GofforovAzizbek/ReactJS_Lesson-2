import React from "react";
import search from "../../assets/search.svg";
import user from "../../assets/user.svg";
import Li from "../Item";
import cart from "../../assets/cart.svg";
const Nav = () => {
  return (
    <nav className="flex w-full max-w-[885px] justify-around items-center">
      <ul className="flex items-center justify-between w-full max-w-[573px] px-2 py-2 list-none">
        <Li title="HOME" />
        <Li title="ABOUT" />
        <Li title="PRODUCT" />
        <Li title="BLOG" />
        <Li title="SHOP" />
        <li>
          <a href="#" className="flex gap-[5px]">
            ABOUT US
          </a>
        </li>
      </ul>

      <div className="flex w-full max-w-[160px] justify-end gap-5">
        <img src={search} alt="Search" className="cursor-pointer" />
        <img src={cart} alt="Search" className="cursor-pointer" />
        <img src={user} alt="User" className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Nav;
