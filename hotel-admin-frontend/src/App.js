import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, CreatePage } from './pages/index';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/create' component={CreatePage} />
      </Switch>
    </div>
  );
};

export default App;
