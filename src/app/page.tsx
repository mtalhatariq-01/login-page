import React from "react";
import Login from "@/components/Login";
function Loginpage() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-full flex flex-col items-center justify-center lg:w-1/2 ">
          <Login />
        </div>
        <div
          className="hidden relative lg:flex h-full
        w-1/2 items-center justify-center bg-gray-200"
        >
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
          <div className="w-full h-1/2 bg-white/10 absolute bottom-0 backdrop-blur-lg" />
        </div>
      </div>
    </>
  );
}

export default Loginpage;
