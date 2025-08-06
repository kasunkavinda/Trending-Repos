import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex justify-around bg-primary text-black p-3 justify-items-center ">
      <div className="justify-items-center">
        <FaStar className="text-blue-500" />
        <p className="text-blue-500">Trending</p>
      </div>
      <div className="justify-items-center ">
        <IoMdSettings />
        <p>Setings</p>
      </div>
    </div>
  );
};

export default Footer;
