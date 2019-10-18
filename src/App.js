import React from "react";
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard';
import WelcomePage from './components/WelcomePage';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import SearchForm from './components/SearchForm';


export default function App() {
  return (
    <main>
      <Header />
      <Router>
    <nav>
        <ul>
          <li>
            {/* <Link to = '/'></Link> */}
            <Link to = '/characters'>Characters</Link>
            <Link to = '/search'>Search</Link>
          </li>
        </ul>
      </nav>
      {/* <Switch>
        <Route path = '/' component = {WelcomePage} />
      </Switch> */}
      <Route exact path = '/' component = {WelcomePage} />
      <Route path = '/characters' component={CharacterCard}/>
      <Route path = '/search' component = {SearchForm}/>
      {/* <Header />
      <CharacterCard /> */}
      </Router>
    </main>
  );
}
