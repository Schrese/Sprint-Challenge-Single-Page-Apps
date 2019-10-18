import React from "react";
import CharacterList from './CharacterList';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function CharacterCard(props) {
  return (
    <Router>
      <div>
        <Route path = '/characters' component = {CharacterList}/>
      </div>
    </Router>
  )
}

export default CharacterCard;