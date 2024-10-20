import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";

const Navbar = ({ isLoggedIn }) => {
  return (
    <>
      <nav>
        <Link to={"/"} className="logo-nav">
          Git Explorer
        </Link>
        <div className="link-cont">
          <Link to={"/"}>Repos</Link>
          <Link to={"/users"}>Users</Link>
          <Link to={"/search"}>Search</Link>
          <Link to={"/authProfile"}>Profile</Link>
          {!isLoggedIn && <Link to={"/login"}>Login</Link>}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
