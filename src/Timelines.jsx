import React from "react";
import Timeline from "./Compontes/Timeline";
const Timelines = () => {
  return (
    <div className="rtl">
      <h1 className="font-bold text-center text-3xl text-blue-700 ">
        {" "}
        Experience
      </h1>
      <ol className="border-l border-neutral-300    bg-gradient-to-r  rounded-2xl bg-gradient-to-r from-sky-800 to-indigo-800   dark:border-neutral-500 mx-8  mt-5">


        <Timeline
          name="University
    "
          date="December 2023 "
          text=" i created an educational platform in Laravel that includes adding students and teachers, uploading and downloading lectures, adding grades and tests, and incorporating a chat feature.
    "
        />

        <Timeline
          name="Al Noor Center"
          date="February  2023"
          text="I have created a dental clinic automation platform that includes services, operations, and advance booking
    "
        />

        <Timeline
          name="Quran channel
    "
          date="January  2024
    "
          text="I have created a website for the Holy Quran, which includes selecting the reciter, choosing the surah, downloading the surahs, listening to them, and watching the live broadcast of the Holy Quran channel


    "
        />
        <Timeline
          name="Chat  
    "
          date="March 2023
    "

          text="I have created a website for group messaging chat"
  
        />


    






      </ol>
    </div>
  );
};

export default Timelines;
