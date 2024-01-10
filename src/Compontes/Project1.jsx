import React from "react";

const Project1 = (props) => {
  return (
    <>
      <div className=" w-80	 bg-slate-200  md:w-1/3 bg-gradient-to-r from-sky-900 to-indigo-700 	  flex  p-5 flex-col items-center  space-y-2 rounded-lg bg-blue-900  border border-blue-500">
        <a href={props.link}>
          <img
            src={props.image}
            alt="hero"
            className="m-auto w-56 pb-5 "
            esrcset=""
          />
          <h5 className="font-bold text-slate-200 text-2xl"> {props.title}</h5>
          <p className="leading-5  text-slate-200 text-sm pt-5 ">{props.text}</p>

          <div></div>
        </a>
      </div>
    </>
  );
};

export default Project1;
