import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, Login} from './pages';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default App;
