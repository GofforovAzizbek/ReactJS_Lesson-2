import React from "react";
import Button from "../Button";
import heroImg from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <>
      <section className="pt-14.5">
        <div className="container flex items-center  mx-auto px-2.5 py-3.5 max-w-285 justify-between">
          <div className="flex flex-col  gap-7.5">
            <div>
              <h4 className="text-[#C72535] font-medium text-2xl">
                Favorite brands
              </h4>
              <h1 className="text-[58px] font-bold max-w-[555px]">
                <span className="text-[#247CC0] bg-[#247cc023]">
                  An exciting place
                </span>{" "}
                for the whole family to shop.
              </h1>
            </div>
            <p className="text-[#030d15b6] font-medium max-w-128.75">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </p>
            <div className="flex gap-[30px] items-center">
              <Button title="SHOP NOW" />
              <p>$ 249.99</p>
            </div>
          </div>
          <div>
            <img src={heroImg} alt="Speaker" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
