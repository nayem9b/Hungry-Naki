import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Testimonial from "./Navbar/Testimonial";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default Root;
