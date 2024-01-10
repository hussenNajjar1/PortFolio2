import React from "react";
export const Hero = () => {
  return (
    <div>
      <section id="hero">
        <div className="container flex  space-x-8 mx-auto px-6 flex-col-reverse md:flex-row">
          <div className="md:w-1/2  flex  flex-col  space-y-5 justify-center py-8  text-center md:text-left  text-slate-900">
            <h1 className="font-bold  text-3xl text-blue-500  md:text-5xl">
                Hi I am Hussen Najjar
            </h1>
            <p className="text-slate-100">
            I am a third-year student majoring in Information Engineering, specializing in Software Engineering. I work in the field of web development and have gained practical experience. I have worked as a developer for user interfaces and the backend of web applications

            </p>
            <a
              href="https://api.whatsapp.com/send?phone=+639269609882"
              className="text-white bg-blue-900 hover:bg-emerald-900 py-2 px-6 rounded-full self-center md:self-start"
            >
              +639269609882
            </a>
            <a  href="https://github.com/hussenNajjar1" className="text-white bg-blue-900 hover:bg-emerald-900 py-2 px-6 rounded-full self-center md:self-start">
             GitHub
           
            </a>
          </div>
          <div className=" md:w-1/2  md:pl-40">
            <img
              src="hussen.jpg"
              className="rounded-full  mt-5"
              alt=""
              srcset=""
              width={"400px"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
