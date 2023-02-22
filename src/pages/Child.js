import React, { useState } from "react";

const Child = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="flex justify-center text-5xl text-[#06B6D4]">{count}</h1>
        <div className="grid gap-4 grid-cols-2 mt-5">
          <button
            className="px-4 py-1 border-4 border-indigo-600 text-2xl"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="px-4 py-1 border-4 border-indigo-600 text-2xl"
            onClick={() => setCount((prvState) => prvState - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Child;
