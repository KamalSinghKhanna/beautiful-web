import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/image.svg";
import Telephone from "../../images/telephone.svg";
function Navbar() {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? " Navbar colorChange" : "Navbar "}>
      <div className="container left-n ">
        <img className="logo-img" src={Logo} alt="" />
      </div>
      <div className="right-n">
        <div className="phone">
          <img className="phone-img" src={Telephone} alt="" />
          <span className="phone-no">+91 2349759439</span>
        </div>
        <button className="button-1">
          <span className="normal-view">Check for opening today</span>{" "}
          <span className="mob-view">Book today</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
