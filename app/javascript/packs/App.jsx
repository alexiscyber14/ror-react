import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../store/actions';
import Greeting from './Greeting';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Welcome to the App!</h1>
        </Route>
        <Route path="/greeting" component={Greeting} />
      </Switch>
    </Router>
  );
};

export default App;
