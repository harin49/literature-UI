import React from 'react';

const CreateBox = () => {
  return (
    <div id="HomeBox" className="sm:flex sm:flex-col w-2/6 items-center justify-center">
      <button
        type="button"
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-base sm:text-xl lg:text-tangerine-text text-white font-bold rounded-lg shadow-xl sm:w-32 lg:w-40"
      >
        Create box
      </button>
    </div>
  );
};

export default CreateBox;
