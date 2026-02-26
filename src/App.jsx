import logo from "./assets/Logo.svg";
import arrow from "./assets/arrow.svg";

import search from "./assets/search.svg";
import cart from "./assets/cart.svg";
import user from "./assets/user.svg";

import heroimg from "./assets/hero-img.png";

import card1 from "./assets/card1.svg";
import card2 from "./assets/card2.svg";
import card3 from "./assets/card3.svg";
import card4 from "./assets/card4.svg";

import cards1 from "./assets/card-1.png";
import cards2 from "./assets/card-2.png";
import cards3 from "./assets/card-3.png";
import cards4 from "./assets/card-4.png";
import cards5 from "./assets/card-5.png";
import cards6 from "./assets/card-6.png";

import right from "./assets/right.svg";

import footerlogo from "./assets/footerlogo.svg";

import fb from "./assets/fb.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import yt from "./assets/yt.svg";

import net from "./assets/net.svg";
import arrowfooter from "./assets/arrowfooter.svg";

const App = () => {
  return (
    <>
      {/* Header */}
      <header className="py-[30px]">
        <div className="max-w-[1180px] w-[100%] mx-auto px-[20px]">
          <div className="flex items-center justify-between">
            <a href="/" className="">
              <img src={logo} alt="" className="" />
            </a>

            {/* Nav */}
            <nav className="">
              <ul className="flex items-center justify-between gap-[40px]">
                <li className="">
                  <a
                    href="#"
                    className="flex items-center gap-[8px] font-['Hind_Siliguri'] font-medium text-[14px] leading-[100%] tracking-[0%] uppercase text-[#030D15]"
                  >
                    Home
                    <img src={arrow} alt="" className="" />
                  </a>
                </li>

                <li className="">
                  <a
                    href="#"
                    className="flex items-center gap-[8px] font-['Hind_Siliguri'] font-medium text-[14px] leading-[100%] tracking-[0%] uppercase text-[#030D15]"
                  >
                    About
                    <img src={arrow} alt="" className="" />
                  </a>
                </li>

                <li className="">
                  <a
                    href="#"
                    className="flex items-center gap-[8px] font-['Hind_Siliguri'] font-medium text-[14px] leading-[100%] tracking-[0%] uppercase text-[#030D15]"
                  >
                    Product
                    <img src={arrow} alt="" className="" />
                  </a>
                </li>

                <li className="">
                  <a
                    href="#"
                    className="flex items-center gap-[8px] font-['Hind_Siliguri'] font-medium text-[14px] leading-[100%] tracking-[0%] uppercase text-[#030D15]"
                  >
                    blog
                    <img src={arrow} alt="" className="" />
                  </a>
                </li>

                <li className="">
                  <a
                    href="#"
                    className="flex items-center gap-[8px] font-['Hind_Siliguri'] font-medium text-[14px] leading-[100%] tracking-[0%] uppercase text-[#030D15]"
                  >
                    shop
                    <img src={arrow} alt="" className="" />
                  </a>
                </li>

                <li className="">
                  <a
                    href="#"
                    className="flex items-center gap-[8px] font-['Hind_Siliguri'] font-medium text-[14px] leading-[100%] tracking-[0%] uppercase text-[#030D15]"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>

            {/* header Right */}
            <div className="flex items-center gap-[30px]">
              <img src={search} alt="" className="cursor-pointer" />
              <img src={cart} alt="" className="cursor-pointer" />
              <img src={user} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="">
        {/* Hero Section */}
        <section className="pt-[54px]">
          <div className="max-w-[1180px] w-[100%] mx-auto px-[20px] flex items-center justify-between">
            <div className="max-w-[560px] w-[100%]">
              <span className="block font-['Hind_Siliguri'] font-medium text-[16px] leading-[100%] tracking-[14.5%] uppercase text-[#C72535] mb-[18px] pl-[12px]">
                Favorite brands
              </span>

              <h1 className="font-['Hind_Siliguri'] font-normal text-[61px] leading-[80px] text-[#030D15] mb-[30px]">
                <span className="font-semibold text-[#247CC0] bg-[#247cc020] px-[12px]">
                  An exciting place
                </span>{" "}
                for the whole family to shop.
              </h1>

              <p className="mb-[36px] font-['Hind_Siliguri'] font-normal text-[20px] leading-[27px] tracking-[0%] text-[#030d1590]">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>

              {/* btn blok */}
              <div className="flex items-center">
                <a
                  href="#"
                  className="font-['Hind_Siliguri'] font-semibold text-[16px] leading-[100%] tracking-[0%] uppercase px-[35px] py-[20px] text-[white] bg-[#247CC0]"
                >
                  Shop Now
                </a>
                <a
                  href="#"
                  className="ml-[30px] mr-[20px] font-['Hind_Siliguri'] font-medium text-[20px] leading-[27px] tracking-[0%] text-center text-[#030D15]"
                >
                  $ 249.99
                </a>
                <a
                  href="#"
                  className="font-['Hind_Siliguri'] font-light text-[16px] leading-[27px] tracking-[0%] text-center line-through text-[#030D1590]"
                >
                  $ 249.99
                </a>
              </div>
            </div>

            <div className="">
              <img src={heroimg} alt="" className="ml-[50px]" />
            </div>
          </div>
        </section>

        {/* Cartd */}
        <section className="">
          <div className="max-w-[1180px] w-[100%] mx-auto px-[20px] shadow-2xl">
            <div className="py-[75px] px-[120px] flex items-center justify-between">
              <a href="#" className="">
                <img src={card1} alt="" className="" />
              </a>
              <a href="#" className="">
                <img src={card2} alt="" className="" />
              </a>
              <a href="#" className="">
                <img src={card3} alt="" className="" />
              </a>
              <a href="#" className="">
                <img src={card4} alt="" className="" />
              </a>
            </div>
          </div>
        </section>

        {/* Section Product */}
        <section className="pt-[110px] pb-[130px]">
          <div className="max-w-[1180px] w-[100%] mx-auto px-[20px]">
            <span className="block font-['Hind_Siliguri'] font-medium text-[14px] leading-[100%] tracking-[14.5%] text-center uppercase text-[#C72535] mb-[20px]">
              New Products
            </span>
            <h2 className="font-hind-siliguri font-semibold text-[44px] leading-[100%] tracking-[0%] text-center mb-[110px]">
              Popular Products
            </h2>

            {/* Product */}
            <div className="grid grid-cols-3 gap-[30px] mb-[60px]">
              <img
                src={cards1}
                alt=""
                className="border-[1px] border-[#0002] cursor-pointer hover:border-[#000] hover:scale-[1.02] border"
              />
              <img
                src={cards2}
                alt=""
                className="cursor-pointer border-[#0002] hover:border-[#000] hover:scale-[1.02] border"
              />
              <img
                src={cards3}
                alt=""
                className="cursor-pointer border-[#0002] hover:border-[#000] hover:scale-[1.02] border"
              />
              <img
                src={cards4}
                alt=""
                className="cursor-pointer border-[#0002] hover:border-[#000] hover:scale-[1.02] border"
              />
              <img
                src={cards5}
                alt=""
                className="cursor-pointer border-[#0002] hover:border-[#000] hover:scale-[1.02] border"
              />
              <img
                src={cards6}
                alt=""
                className="cursor-pointer border-[#0002] hover:border-[#000] hover:scale-[1.02] border"
              />
            </div>

            <a
              href="#"
              className="flex items-center justify-center gap-[10px] font-hind-siliguri font-semibold text-[14px] leading-[100%] tracking-[0%] text-center uppercase text-[#030D15]"
            >
              view all
              <img src={right} alt="" className="" />
            </a>
          </div>
        </section>

        {/* Section Contact */}
        <section className="py-[100px] bg-[#F4F9FC]">
          <div className="max-w-[1180px] w-[100%] mx-auto px-[20px]">
            <div className="flex items-center justify-between">
              <div className="max-w-[360px] w-[100%]">
                <span className="font-hind-siliguri font-medium text-[14px] leading-[100%] tracking-[14.5%] text-center uppercase text-[#C72535]">
                  User Contact
                </span>
                <h3 className="font-hind-siliguri font-medium text-[25px] leading-[100%] tracking-[0%] text-[#030D15] pt-[8px] pb-[14px]">
                  Contact Us for those interested.
                </h3>
                <p className="font-hind-siliguri font-normal text-[14px] leading-[21px] tracking-[0%] text-[#030D1590]">
                  The standard chunk of Lorem Ipsum used since the is reproduced
                  below for those interested.
                </p>
              </div>

              <div className="flex items-center">
                <input
                  className="font-hind-siliguri font-normal text-[14px] leading-[21px] tracking-[0%] text-[#030D1590] bg-[#fff] placeholder:text-[#030D1590] outline-0 border-[1px] border-[#030d152f] py-[15px] pr-[160px] pl-[25px]"
                  type="email"
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  className="py-[19.5px] px-[24px] bg-[#247CC0] font-hind-siliguri text-[14px] leading-[100%] text-[#fff] hover:opacity-[0.7]"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-[75px] pb-[55px] bg-[#030D15]">
        <div className="max-w-[1180px] w-[100%] mx-auto px-[20px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[20px] max-w-[260px] w-[100%]">
              <a href="/" className="">
                <img src={footerlogo} alt="" className="" />
              </a>
              <p className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]">
                STORE - worldwide fashion store since 1978. We sell over 1000+
                branded products on our web-site.
              </p>
            </div>
            <div className="">
              <h4 className="font-hind-siliguri font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#fff] mb-[25px]">
                INFORMATION
              </h4>
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff] mb-[15px]"
              >
                New Collection
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff] mb-[15px]"
              >
                About Store
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff] mb-[15px]"
              >
                Contact Us
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff] mb-[15px]"
              >
                Latest News
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff] mb-[15px]"
              >
                Our Sitemap
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Orders History
              </a>
              <br />
            </div>
            <div className="">
              <h4 className="font-hind-siliguri font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#fff] mb-[25px]">
                FOOTER MENU
              </h4>
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Instagram profile
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                New Collection
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Contact Us
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Latest News
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Terms & Conditions
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Purchase Theme
              </a>
              <br />
            </div>
            <div className="">
              <h4 className="font-hind-siliguri font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#fff] mb-[25px]">
                USEFUL LINKS
              </h4>
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Instagram profile
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                New Collection
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Contact Us
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Latest News
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Terms & Conditions
              </a>
              <br />
              <a
                href="#"
                className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                Purchase Theme
              </a>
              <br />
            </div>
            <div className="">
              <h4 className="font-hind-siliguri font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#fff] mb-[25px]">
                ABOUT THE STORE
              </h4>
              <p className="font-hind-siliguri font-normal text-[14px] leading-[100%] tracking-[0%] text-[#fff] max-w-[260px] w-[100%] mt-[25px] mb-[50px]">
                STORE - worldwide fashion store since 1978. We sell over 1000+
                branded products on our web-site.
              </p>
              <div className="flex items-center gap-[25px] mb-[50px]">
                <a href="#">
                  <img src={fb} alt="" className="" />
                </a>
                <a href="#">
                  <img src={instagram} alt="" className="" />
                </a>
                <a href="#">
                  <img src={twitter} alt="" className="" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="" className="" />
                </a>
                <a href="#">
                  <img src={yt} alt="" className="" />
                </a>
              </div>

              <a
                href="#"
                className="flex items-center font-hind-siliguri font-medium text-[14px] leading-[100%] tracking-[0%] text-[#fff]"
              >
                <img src={net} alt="" className="mr-[8px]" />
                English
                <img src={arrowfooter} alt="" className="ml-[4px]" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
