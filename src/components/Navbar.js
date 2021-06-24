import React from "react";
import logo from "../assets/logo.jpg";
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="wrapperNavbarHome">
      <div className="brandNavbarHome">
        <img className="brandNavbarHomeImage" src={logo} alt=""></img>
      </div>
      <div className="navbarHomeDiv">
        <ul>
          <li>mobiel</li>
          <li>Tv {"&"} AV</li>
          <li>Huishoudelijk</li>
          <li>IT</li>
          <li>Smart Home</li>
          <li>Promoties</li>
        </ul>
      </div>
      <div className="navbarHomeDivRight">
        <span className="navbarHomeDivRightIcon">
          {" "}
          <FaUser size={22} />
        </span>

        <span className="navbarHomeDivRightIcon">
          <FaShoppingCart size={22} />
        </span>

        <span className="navbarHomeDivRightIconHamburger">
          <FaBars size={22} />
        </span>
      </div>
    </div>
  );
}
