import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import CharacterList from './CharacterList';

export default function Header() {
  return (
    <Router>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <ul>
          <li>
            <Link to = '/characters'>Characters</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path = '/characters' component={CharacterList}/>
      </Switch>
    </header>
    </Router>
  );
}
