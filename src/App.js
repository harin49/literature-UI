import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import MobilePortraitScreen from './MobilePortraitScreen';

const App = () => {
  return (
    <div className="min-w-full min-h-full bg-main-custom">
      <MobilePortraitScreen />
      <HomeScreen />
    </div>
  );
};

export default App;
