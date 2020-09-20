import React from 'react';

const MobilePortraitScreen = () => {
  return (
    <div className="m-portrait:flex m-portrait:flex-col m-portrait:items-center sm:hidden p-6">
      <span className="text-6xl text-yellow-600">Literature</span>
      <div className="px-4 py-4 mt-32 w-auto bg-c1-gray rounded-lg shadow-xl border-l-8 border-blue-700 animate-bounce">
        <span className="text-white text-2xl">Tilt screen to start playing!</span>
      </div>
    </div>
  );
};

export default MobilePortraitScreen;
