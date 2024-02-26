import React from "react";
import { Link } from "react-router-dom";

// import classes from "./Footer.module.css";

const Footer = () => {
  //   const year = new Date().getFull;

  return (
    <div className="w-full h-12 bg-footer-bg">
      <div className="h-12 ml-6 flex flex-wrap content-center">
        <Link to="/">Contact</Link>
        <p className="ml-6">
          Legal notice: © {new Date().getFullYear()} Dionis Prebreza
        </p>
      </div>
    </div>
  );
};

export default Footer;
