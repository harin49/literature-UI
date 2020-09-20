import React from 'react';

const HomeBox = () => {
  return (
    <div id="HomeBox" className="sm:flex sm:flex-col w-2/6 items-center justify-center">
      <button
        type="button"
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-base sm:text-xl lg:text-tangerine-text text-white font-bold rounded-lg shadow-xl sm:w-32 lg:w-40"
      >
        Create game
      </button>
      <button
        type="button"
        className="mt-10 bg-orange-500 hover:bg-orange-700 text-base sm:text-xl lg:text-tangerine-text text-white font-bold rounded-lg shadow-xl sm:w-32 lg:w-40"
      >
        Join game
      </button>
      <button
        type="button"
        className="mt-10 bg-purple-500 hover:bg-purple-700 text-base sm:text-xl lg:text-tangerine-text text-white font-bold rounded-lg shadow-xl sm:w-32 lg:w-40"
      >
        Rules
      </button>
      <button
        type="button"
        className="mt-10 mb-6 bg-teal-500 hover:bg-teal-700 text-base sm:text-xl lg:text-tangerine-text text-white font-bold rounded-lg shadow-xl sm:w-32 lg:w-40"
      >
        Credits
      </button>
    </div>
  );
};

export default HomeBox;
