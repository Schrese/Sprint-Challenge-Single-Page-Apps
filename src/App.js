import React from "react";
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard';
import WelcomePage from './components/WelcomePage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import {Button} from 'reactstrap';


export default function App() {
  return (
    <main>
      <Header />
      <Router>
    <nav>
        <ul>
          <li>
            {/* <Link to = '/'></Link> */}
            <Link to = '/characters'><Button color = 'danger'>Characters</Button></Link>
            <Link to = '/search'><Button color = 'danger'>Search</Button></Link>
            <Link to = '/'><Button color = 'danger'>Home</Button></Link>
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
