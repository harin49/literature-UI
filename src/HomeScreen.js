import React from 'react';

import HomeBox from './components/HomeBox';

const HomeScreen = () => {
  return (
    <div className="h-screen m-portrait:hidden sm:flex justify-center items-center">
      <HomeBox />
    </div>
  );
};

export default HomeScreen;
