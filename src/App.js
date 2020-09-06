import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import MobilePortraitScreen from './MobilePortraitScreen';

const App = () => {
  return (
    <div className="h-full bg-main-custom overflow-auto">
      <MobilePortraitScreen />
      <HomeScreen />
    </div>
  );
};

export default App;
