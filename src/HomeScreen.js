import React from 'react';

import HomeBox from './components/HomeBox';

const HomeScreen = () => {
  return (
    <div className="h-full m-portrait:hidden sm:flex sm:flex-col items-center">
      <span className="sm:text-6xl lg:text-tangerine-header text-yellow-600">Literature</span>
      <HomeBox />
    </div>
  );
};

export default HomeScreen;
