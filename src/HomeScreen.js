/* eslint-disable import/no-cycle */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MobilePortraitScreen from './MobilePortraitScreen';
import { boxRoutes } from './routes';

const HomeScreen = () => {
  return (
    <div>
      <MobilePortraitScreen />
      <div className="h-full m-portrait:hidden sm:flex sm:flex-col items-center">
        <span className="sm:text-6xl lg:text-tangerine-header text-yellow-600 animate-lightUp">Literature</span>
        <Switch>
          {boxRoutes.map((item) => {
            return <Route exact path={item.path} component={item.component} />;
          })}
        </Switch>
      </div>
    </div>
  );
};

export default HomeScreen;
