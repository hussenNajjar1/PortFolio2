import React from "react";

export const Card = () => {
  return (
    <div>
      <section id="author">
        <div className="mx-auto my-32 text-center container px-5">
          <h1 className=" text-3xl text-blue-700 font-bold py-6" id="SKILLS">SKILLS</h1>
          {/* <p className="mt-8 max-w-5xl mx-auto ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatum animi quod pariatur omnis nostrum!</p> */}
          <div className="mt-10 flex flex-col  space-x-0 md:space-x-5  md:flex-row  space-y-5   md:space-y-0  px-6 ">
            <div className=" bg-gradient-to-r from-sky-600 to-indigo-500  md:w-1/2 flex p-6 flex-col items-center space-y-2 rounded-lg bg-red-900 border border-blue-500">
              <h5 className="font-bold text-slate-200 text-2xl"> Front End </h5>
              <div className="flex flex-col md:flex-row justify-between w-full ">
                <div className=" flex flex-col  md:mx-10 justify-between h-60 p-4">
                  <div className="flex items-center">
                    <img src="images/html.png" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">Html</p>
                  </div>
                  <div className="flex items-center">
                    <img src="images/css.png" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">CSS</p>
                  </div>
                  <div className="flex items-center">
                    <img src="images/js.png" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">JavaScript</p>
                  </div>
                  <div className="flex items-center">
                    <img src="images/bootstrap.png" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">Bootstrap</p>
                  </div>
                  
                </div>

                <div className=" flex flex-col  md:mx-10 justify-between h-60 p-4">
                  <div className="flex items-center">
                    <img src="logo512.png" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">React</p>
                  </div>
                  <div className="flex items-center">
                    <img src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3efile_type_tailwind%3c/title%3e%3cpath%20d='M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z'%20style='fill:%2344a8b3'/%3e%3c/svg%3e" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">Tailwindcss</p>
                  </div>
                  <div className="flex items-center">
                    <img src="logo512.png" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">Tw-elements</p>
                  </div>
                  <div className="flex items-center">
                    <img  className="" src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27UTF-8%27?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width=%27800px%27%20height=%27800px%27%20viewBox=%270%20-26%20256%20256%27%20version=%271.1%27%20xmlns=%27http://www.w3.org/2000/svg%27%20xmlns:xlink=%27http://www.w3.org/1999/xlink%27%20preserveAspectRatio=%27xMidYMid%27%3e%3cg%3e%3cpolygon%20fill=%27%2300B0FF%27%20points=%270%20110.848%200%200%2096%2055.424%2096%2092.3733333%2032%2055.424%2032%20129.322667%27%3e%3c/polygon%3e%3cpolygon%20fill=%27%230081CB%27%20points=%2796%2055.424%20192%200%20192%20110.848%20128%20147.797333%2096%20129.322667%20160%2092.3733333%20160%2055.424%2096%2092.3733333%27%3e%3c/polygon%3e%3cpolygon%20fill=%27%2300B0FF%27%20points=%2796%20129.322667%2096%20166.272%20160%20203.221333%20160%20166.272%27%3e%3c/polygon%3e%3cpath%20d=%27M160,203.221333%20L256,147.797333%20L256,73.8986667%20L224,92.3733333%20L224,129.322667%20L160,166.272%20L160,203.221333%20Z%20M224,55.424%20L224,18.4746667%20L256,5.68434189e-14%20L256,36.9493333%20L224,55.424%20Z%27%20fill=%27%230081CB%27%3e%3c/path%3e%3c/g%3e%3c/svg%3e" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">Material-Ui</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-gradient-to-r from-sky-600 to-indigo-500  md:w-1/2 flex p-6 flex-col items-center space-y-2 rounded-lg bg-red-900 border border-blue-500">
              <h5 className="font-bold text-slate-200 text-2xl"> Back End </h5>
              <div className="flex flex-col md:flex-row justify-center w-full ">
                <div className=" flex flex-col  md:mx-10 justify-between h-60 p-4">
                  <div className="flex items-center">
                    <img className="w-10"  src="logo512.png" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">Php</p>
                  </div>
                  <div className="flex items-center">
                    <img  className="w-1"  src="https://portfolio2024-sable.vercel.app/assets/mysql-logo-svgrepo-com-UKlQjpeW.svg" className="w-10" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">MySql</p>
                  </div>
                  <div className="flex items-center">
                    <img className="w-10" src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27utf-8%27?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width=%27800px%27%20height=%27800px%27%20viewBox=%270%200%2064%2064%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M47.982%2023.453c.012.044.018.089.018.134v7.071a.516.516%200%200%201-.26.448l-5.934%203.417v6.772a.517.517%200%200%201-.258.447L29.16%2048.874c-.029.016-.06.026-.09.037-.012.004-.023.011-.035.015a.519.519%200%200%201-.264%200c-.015-.004-.027-.012-.041-.017-.028-.01-.058-.02-.085-.035l-12.386-7.132a.517.517%200%200%201-.259-.447V20.082c0-.046.006-.091.018-.135.004-.015.013-.028.018-.043.01-.027.019-.055.033-.08.01-.017.024-.03.035-.046.015-.02.029-.042.046-.06.015-.015.034-.026.051-.039.019-.015.035-.032.057-.044l6.194-3.566a.517.517%200%200%201%20.515%200l6.194%203.566c.021.013.039.029.057.044.017.013.036.024.05.038.019.02.032.04.047.061.011.016.026.029.035.046.015.025.023.053.034.08.005.015.014.028.017.044a.52.52%200%200%201%20.019.134v13.25l5.16-2.972v-6.773a.52.52%200%200%201%20.019-.134c.004-.016.012-.03.018-.044.01-.027.019-.055.033-.08.01-.017.024-.03.035-.046.015-.02.028-.042.046-.06.015-.015.034-.025.05-.038.02-.016.037-.033.057-.045l6.195-3.566a.516.516%200%200%201%20.515%200l6.194%203.566c.022.013.038.03.058.044.016.013.034.024.05.039.017.018.03.04.046.06.011.016.025.03.034.046.015.025.024.053.034.08.006.015.014.028.018.044zm-1.014%206.907v-5.88L44.8%2025.728l-2.994%201.724v5.88l5.162-2.972zm-6.194%2010.637v-5.884l-2.945%201.682-8.41%204.8v5.94l11.355-6.538zM17.032%2020.975v20.022l11.355%206.537v-5.938l-5.932-3.357-.002-.002-.003-.001c-.02-.012-.036-.028-.055-.043-.016-.012-.035-.023-.049-.037l-.001-.002c-.017-.016-.029-.036-.043-.054-.013-.017-.028-.032-.038-.05l-.001-.002c-.012-.02-.019-.043-.027-.065-.009-.019-.02-.037-.025-.058-.006-.025-.007-.05-.01-.076-.003-.02-.008-.038-.008-.058V23.946L19.2%2022.222l-2.168-1.247zm5.678-3.863-5.16%202.97%205.159%202.97%205.16-2.97-5.16-2.97h.001zm2.684%2018.537%202.993-1.723V20.975l-2.167%201.247-2.994%201.724v12.951l2.168-1.248zM41.29%2020.617l-5.16%202.97%205.16%202.97%205.158-2.97-5.158-2.97zm-.517%206.835-2.994-1.724-2.167-1.248v5.88l2.993%201.723%202.168%201.249v-5.88zm-11.872%2013.25%207.568-4.32%203.783-2.16-5.156-2.968-5.936%203.418-5.41%203.115%205.151%202.915z%27%20fill=%27%23FF2D20%27/%3e%3c/svg%3e" alt="tailwind logo" width="20px" />
                    <p className="pl-5 text-slate-200">Laravel</p>
                  </div>
               
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
