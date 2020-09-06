import React from 'react';

const MobilePortraitScreen = () => {
  return (
    <div className="m-portrait:flex sm:hidden w-full h-full p-6">
      <div className="px-4 py-4 mt-48 w-auto bg-c1-gray rounded-lg shadow-xl border-l-8 border-blue-700 animate-bounce">
        <span className="text-white text-2xl">Tilt screen to start playing!</span>
      </div>
    </div>
  );
};

export default MobilePortraitScreen;
