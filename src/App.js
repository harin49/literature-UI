import React, { useEffect, useState } from 'react';
import './App.css';
import utils from './utils';

const App = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isPortraitOrientation, setIsPortraitOrientation] = useState(window.innerWidth < window.innerHeight);

  useEffect(() => {
    const debouncedResizedHandler = utils.debounce(() => {
      setIsMobileScreen(window.innerWidth <= 850);
      setIsPortraitOrientation(window.innerWidth < window.innerHeight);
    }, 10);

    window.addEventListener('resize', debouncedResizedHandler);
    return () => window.removeEventListener('resize', debouncedResizedHandler);
  });

  return (
    <div className="min-w-full min-h-full p-6 bg-main-custom">
      <Choose>
        <When condition={isMobileScreen}>
          <If condition={isPortraitOrientation}>
            <h1 className="text-2xl text-blue-700 leading-tight">mobile device - portrait</h1>
          </If>
          <If condition={!isPortraitOrientation}>
            <h1 className="text-2xl text-blue-700 leading-tight">mobile device - landscape</h1>
          </If>
        </When>
        <Otherwise>
          <div className="px-12 py-12 w-1/3 mt-10 bg-gray-100 rounded-lg shadow-xl mx-auto border-l-8 border-purple-300 animate-bounce">
            <h1 className="text-2xl text-blue-700 leading-tight">Start literature!</h1>
            <p className="text-base text-gray-700 leading-normal">Check rules</p>
          </div>
        </Otherwise>
      </Choose>
    </div>
  );
};

export default App;
