import React from "react";
import Project1 from "./Project1";
const Project = () => {
  return (
    <>
      <section id="author">
        <div className="mx-auto my-32 text-center container  ">
          <h1 className=" text-3xl text-blue-700 font-bold py-6">project</h1>
          <p className="mt-8 max-w-5xl mx-auto  text-slate-200">
            Applications and programs that I worked on during my career in the
            field Software Engineering
          </p>
          <div className="mt-10 flex flex-col  space-x-0 md:space-x-5  md:flex-row  space-y-5    md:space-y-0   ">
            <Project1
              image="images/Eit.png"
              title="University"
              text="i created an educational platform in Laravel that includes adding students and teachers, uploading and downloading lectures, adding grades and tests, and incorporating a chat feature. "
             link="https://github.com/hussenNajjar1/University-"
         
            />
            <Project1   
             image="images/AL.png"
             title="Al Noor Center   "
              text="I have created a dental clinic automation platform that includes services, operations, and advance booking   " 
              link="https://github.com/hussenNajjar1/Dental-automation-project"
             />
            <Project1
               image="images/q.png"
             title="Quran channel" 
             text="I have created a website for the Holy Quran, which includes selecting the reciter, choosing the surah, downloading the surahs, listening to them, and watching the live broadcast of the Holy Quran channel
             "
             link="https://quran-five-chi.vercel.app/"
        />
            <Project1
               image="images/chat1.png"
             title="Chat" 
             text="I have created a website for group messaging chat"
             link="https://github.com/hussenNajjar1/Chat"
        />
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
