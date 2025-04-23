import React from "react";
import { useState } from "react";

export default function HeroSection(props) {

   


    return (

    
        
      <div className="relative min-h-screen overflow-hidden">
        <nav className=" container relative mx-auto flex w-full items-center justify-between px-5 py-3 text-xl ">
          <div >{props.logo}</div>
          <div className="flex items-center justify-around">
            <ul className="mx-3 flex">
              <li className="mx-3">{props.l1}</li>
              <li className="mx-3">{props.l2}</li>
              <li className="mx-3">{props.l3}</li>
            </ul>
            <button className="hidden rounded-xl bg-white/20 px-4 py-2 text-[#FF00E5] sm:block">
             LOGIN 
            </button>
            <button className="hidden rounded-xl bg-white/20 px-4 py-2 text-[#FF00E5] sm:block" onClick={chang_bg}>
             {props.changebg}
            </button>
          </div>
        </nav>
  
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative top-32 max-w-3xl font-Manrope">
            <h1 className="text-5xl font-extrabold sm:text-7xl">
             {props.heading}
            </h1>
            <p className="my-4 font-medium">
             {props.para}
            </p>
            <div>
              <button className="m-1 rounded-xl  bg-[#FF00E5] px-16 py-3">
                Learn More
              </button>
              <button className=" mx-1 rounded-xl bg-white px-16 py-3 text-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="relative   top-[10vh] max-w-full sm:top-0 ">
          <div className="absolute w-full object-contain">
            <img src="circle.png" alt="" className="relative  object-fill" />
          </div>
        </div>
      </div>
    
    );
  }
                 
  