import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to={"/order"}><h2 style={{}} >Order Food</h2></Link>
        <Link to={"/"}><h2>Ramesh</h2></Link>
        <Link to={"/"}>
          <div className="avatar">
            <img
              style={{ width: "100px" }}
              className="avatar-img"
              src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
