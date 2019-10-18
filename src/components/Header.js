import React from "react";
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import CharacterList from './CharacterList';
// import WelcomePage from './WelcomePage';

export default function Header() {
  return (
   
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    //  <Router>
    //    <nav>
    //      <ul>
    //        <li>
    //          <Link to = '/'></Link>
    //          <Link to = '/characters'>Characters</Link>
    //        </li>
    //      </ul>
    //    </nav>
    //    <Switch>
    //      <Route path = '/' component = {WelcomePage} />
    //   </Switch>
    //    <Switch>
    //    <Route path = '/characters' component={CharacterList}/>
    //    </Switch>
    
    // </Router>
  );
}
