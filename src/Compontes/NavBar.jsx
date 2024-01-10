import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {

  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector("#mobile-menu");
    mobileMenu.classList.toggle("hidden");
  }

  return (
    <div className="bg-slate-900">
      <div className=" md:h-2 h-0">
      </div>
     <nav className=" md:container mx-auto    p-2 md:p-2   bg-red-900 md:rounded-full bg-gradient-to-r from-sky-900 to-sky-800 md:mt-5   w-full">
        <div className="flex items-center justify-between px-5 ">
          <div className="flex">
            {/* <img src="logo512.png" alt="tailwind logo" width="30px" /> */}
           <h1 className="text-slate-200 pt-1 px-3"> Hussen Najjar</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className="text-slate-200 hover:text-slate-300 py-2">
            SKILLS
            </NavLink>
            <NavLink to="/SingUp" className="text-slate-200 hover:text-slate-300 py-2">
            Project
            </NavLink>
            <NavLink to="/InsertPost" className="text-slate-200 hover:text-slate-300 py-2">
            Experience
            </NavLink>
         
         
          </div>
          <button className="md:hidden" id="mobile-btn" onClick={toggleMobileMenu}>
            <i className="ri-menu-line text-2xl  text-slate-200"></i>
          </button>
        </div>
        <div className="md:hidden">
          <div
            id="mobile-menu"
            className="hidden absolute  mt-5  flex flex-col bg-gray-50 py-8 items-center space-y-4 font-bold border border-gray-300 left-6 right-6"
          >
            <NavLink to="#SKILLS" className=" hover:bg-blue-500 hover:w-full hover:text-center ">SKILLS</NavLink>
            <NavLink to="/about">Project</NavLink>
            <NavLink to="/contact">Experience</NavLink>
         
            <NavLink
              to="https://github.com/hussenNajjar1"
              className="text-white bg-blue-900 hover:bg-emerald-900 py-2 px-6 rounded-full"
            >
            GitHub
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
     
   
  );
};
