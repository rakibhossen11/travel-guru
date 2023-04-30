import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-10">
      <div>
        <Link to="/">
          <img className="h-14 w-40" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex gap-12 items-center font-display">
        <Link to="/news">News</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to='/login'><button className="bg-yellow-400 py-3 px-8 rounded-md text-black ">
          Log in
        </button></Link>
      </div>
    </div>
  );
};

export default Navbar;
