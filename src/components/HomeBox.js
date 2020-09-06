import React from 'react';

const HomeBox = () => {
  return (
    <div id="HomeBox" className="sm:flex sm:flex-col w-2/6 items-center justify-center">
      <button
        type="button"
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-base sm:text-sm md:text-lg text-white font-bold py-2 px-4 rounded-lg shadow-xl w-40"
      >
        Create game
      </button>
      <button
        type="button"
        className="mt-10 bg-orange-500 hover:bg-orange-700 text-base sm:text-sm md:text-lg text-white font-bold py-2 px-4 rounded-lg shadow-xl w-40"
      >
        join game
      </button>
      <button
        type="button"
        className="mt-10 bg-purple-500 hover:bg-purple-700 text-base sm:text-sm md:text-lg text-white font-bold py-2 px-4 rounded-lg shadow-xl w-40"
      >
        Rules
      </button>
      <button
        type="button"
        className="mt-10 mb-6 bg-teal-500 hover:bg-teal-700 text-base sm:text-sm md:text-lg text-white font-bold py-2 px-4 rounded-lg shadow-xl w-40"
      >
        Credits
      </button>
    </div>
  );
};

export default HomeBox;
