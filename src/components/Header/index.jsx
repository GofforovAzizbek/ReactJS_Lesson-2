import logo from "../../assets/Logo.svg";
import Nav from "../Navbar";
const Header = () => {
  return (
    <>
      <header className="flex items-center justify-center">
        <div className="container flex items-center justify-between mx-auto px-2.5 py-3.5 max-w-285">
          <div className="logo">
            <img src={logo} alt="Logo" className="cursor-pointer" />
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
