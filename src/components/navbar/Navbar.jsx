import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const navigationArr = [
  {
    label: "Home",
    link: "/home",
    type: "header",
  },
  {
    label: "Shop",
    link: "/shop",
    type: "dropdown",
    options: ["item", "item", "item", "item", "item"],
  },
  {
    label: "Blog",
    link: "/blog",
    type: "dropdown",
    options: ["item", "item", "item", "item", "item"],
  },
  {
    label: "About",
    link: "/about",
    type: "header",
  },
  {
    label: "Contact",
    link: "/contact",
    type: "header",
  },
];

function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="logo">logo</div>
        <div className="navigation">
          <ul>
            {navigationArr.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.link}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="user">user staff</div>
      </div>
    </div>
  );
}

export default Navbar;
