import React from "react";
import qr from "./Qr Code.png";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
const Body2 = () => {
  return (
    <div className="flex pr-[8%] pl-[8%] bg-black py-8">
      <div className="lg:w[40] h-full">
        <div>
          <h1 className="text-white font-medium  text-2xl">
            Download <span className="text-sky-500">Our Online</span>
          </h1>
          <h1 className="text-white font-medium text-2xl">
            <span className="text-sky-500"> Learning</span> Mobile App Now
          </h1>
        </div>
        <div className=" font-medium pt-2 text-slate-50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. sed do
          elsmod tempor
        </div>
        <div className="flex lg:flex-row flex-col gap-5 pt-10 lg:pr-3">
          <div className="lg:border-r-2 border-b-2 lg:border-b-0 pr-10 lg:pb-0 pb-2">
            <h1 className="text-white font-medium text-2xl lg:text-center">
              5 Million+
            </h1>
            <h1 className="text-slate-50">Woldwide Active Users</h1>
          </div>
          <div className="lg:border-r-2 border-b-2 lg:border-b-0 lg:px-10 pr-10 lg:pb-0 pb-2">
            <h1 className="text-white font-medium text-2xl">1250+</h1>
            <h1 className="text-slate-50">Tutors</h1>
          </div>
          <div className="lg:border-r-2  lg:px-10 pr-10 lg:pb-0 pb-2">
            <h1 className="text-white font-medium text-2xl">8000+</h1>
            <h1 className="text-slate-50">Course</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-6 lg:flex-row flex-col ">
        <div>
          <div className="bg-[#434343ff] text-white p-5 rounded-lg flex flex-col gap-2 w-[300px]">
            <div className="flex lg:flex-col justify-between gap-5">
              <div>
                <h1>For iOS</h1>
                <h1>iOS 15.6</h1>
              </div>
              <button className="bg-sky-500 px-3 py-1 rounded-full w-1/2">
                Download App
              </button>
            </div>
            <div className="pt-5 flex justify-between relative">
              <img className="w-[30%]" src={qr} />
              <div className="text-[70px] bg-black p-2 rounded-full absolute left-52 top-10">
                <AiFillApple />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#434343ff] text-white p-5 rounded-lg flex flex-col gap-2 w-[300px]">
            <div className="flex lg:flex-col justify-between gap-5">
              <div>
                <h1>For Android</h1>
                <h1>Android 8.0+</h1>
              </div>
              <button className="bg-sky-500 px-3 py-1 rounded-full w-1/2">
                Download App
              </button>
            </div>
            <div className="pt-5 flex justify-between relative">
              <img className="w-[30%]" src={qr} />
              <div className="text-[70px] bg-black p-2 rounded-full absolute left-52 top-10">
                <AiFillAndroid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
