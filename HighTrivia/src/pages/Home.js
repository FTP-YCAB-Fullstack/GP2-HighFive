import React from "react";

function Home() {
  return (
    <>
      <nav className="flex justify-between bg-gray-400 p-3 absolute top-0 z-50 w-full">
        <span className="text-white">Logo</span>
        <button className="bg-white px-3 rounded-md">Sign In</button>
      </nav>
      <div className="flex h-screen justify-center items-center">
        <div className="flex justify-center items-center flex-col justify-around h-2/5 w-1/2">
          <div className="flex bg-gray-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
            <span>Category</span>
            <span>v</span>
          </div>
          <div className="flex bg-gray-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
            <span>Difficulty</span>
            <span>v</span>
          </div>
          <button className="bg-gray-400 py-4 px-8 rounded-lg text-white">
            Start
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
