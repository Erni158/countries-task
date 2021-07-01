import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Continents } from './components/Continents';
import './App.css';

const App = () => {
  return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/continents">Continents</Link>
              </li>
            </ul>
          </nav>
            <Switch>
              <Route path='/continents'>
                <Continents />
              </Route>
            </Switch>
        </Router>
      </div>
  );
}

export default App;
