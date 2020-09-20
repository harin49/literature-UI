import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { mainRoutes } from './routes';

const App = () => {
  return (
    <Router>
      <div className="h-full bg-main-custom overflow-auto font-tangerine">
        <Switch>
          {mainRoutes.map((item) => (
            <Route path={item.path} component={item.component} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
