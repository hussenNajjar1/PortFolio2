import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-950">
        <div className="container mx-auto text-white px-5 py-10  flex flex-col-reverse md:flex-row justify-between space-y-8  md:space-y-0" >
          <div className="flex flex-col  m-auto items-center justify-between space-y-12 md:space-y-2 md:items-start">

            <div className="text-center mt-6 md:mt-0">
           
            Hussen Najjar &copy;2024
            </div>
          
          </div>  
        </div>
      </footer>

    </div>
  );
};
