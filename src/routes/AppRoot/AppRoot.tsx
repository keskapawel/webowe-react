import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const AppRoot = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <Navbar />
      <div className="min-h-screen w-3/4 mx-auto">
        <div className="my-4 mx-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppRoot;
