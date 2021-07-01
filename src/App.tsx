import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Continents } from './components/Continents';
import { Countries } from './components/Countries';
import styled from 'styled-components';
import './App.css';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 32px;
  
  ul {
    padding: 20px;
    list-style-type: none;

    li {
      
      a {
        color: #000;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

`;

const App = () => {


  return (
      <div className="App">
        <Router>
          <Route exact path='/'>
            <Nav>
              <ul>
                <li>
                  <Link to="/continents">Continents</Link>
                </li>
              </ul>
            </Nav>
          </Route>
            <Route path='/continents'>
              <Continents />
            </Route>
            <Route path='/continents/:code'>
              <Countries />
            </Route>
        </Router>
      </div>
  );
}

export default App;
