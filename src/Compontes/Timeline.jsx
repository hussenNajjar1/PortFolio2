import React from 'react'

const Timeline = (props) => {
  return (
   <>
   
   <li>
    <div className="flex-start flex items-center pt-3 " >
      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-red-900 dark:bg-neutral-500" />
      <p className="text-sm  text-black	 text-xl font-bold   dark:text-neutral-300">
       {props.date}
      </p>
    </div>
    <div className="mb-6 ml-4 mt-2 pb-5">
      <h4 className="mb-1.5 text-xl font-semibold  text-slate-200">{props.name}</h4>
      <p className="mb-3 text-slate-100 px-2">
        {props.text}
      </p>
    </div>
  </li>
   </>
  )
}

export default Timeline