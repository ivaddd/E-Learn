import React from "react";
import hp from "./hp.png";
const Body = () => {
  return (
    <div className="w-full h-screen rounded-sm pr-[8%] pl-[8%] bg-slate-100 overflow-hidden">
      <div className="flex justify-center lg:justify-between pt-32">
        <div className="hidden sm:block text-justify">
          <h1 className="font-medium text-lg">5M +</h1>
          <h1 className="text-slate-300">Active Users</h1>
          <p></p>
        </div>
        <div>
          <h1 className="text-2xl text-center font-medium">
            <span className="text-sky-500">- </span>The best Online Learning App
          </h1>
          <h1 className="text-3xl text-center pt-2 font-medium">
            Your Ultimate Online
          </h1>
          <h1 className=" text-3xl text-center font-medium">
            <span className="text-sky-500 text-3xl underline underline-offset-[12px] lg:underline-offset-[14px]">
              Learning
            </span>
            Solution!
          </h1>
        </div>
        <div className="hidden sm:block">
          <h1>5M +</h1>
          <h1></h1>
          <p></p>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="flex justify-between lg:gap-10 lg:full">
          {/* <div> */}
          <img src={hp} className="lg:h-[40%] h-[20%] mt-20 w-max" />
          {/* </div>
          <div> */}
          <img src={hp} className="lg:h-[50%] h-[30%] w-max" />
          {/* </div> */}
          {/* <div> */}
          <img src={hp} className="lg:h-[40%] h-[20%] mt-20 w-max" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
