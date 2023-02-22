import React from "react";

const Child = () => {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="flex justify-center text-5xl text-[#06B6D4]">0</h1>
        <div className="grid gap-4 grid-cols-2 mt-5">
          <button className="px-4 py-1 border-4 border-indigo-600 text-2xl">
            Increment
          </button>
          <button className="px-4 py-1 border-4 border-indigo-600 text-2xl">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Child;
