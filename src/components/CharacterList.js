import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([])
  const [query, setQuery] = useState([])
  
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        // console.log(response.data.results)
        setData(response.data.results)
        const something = response.data.results;
        // console.log(something);
        const results = something.filter(character => 
          character.toLowerCase);
        if (results === response.data.results) {
          setQuery(results);
          console.log(results)
        }
       
      })
      .catch(error => {
        console.log('there was an error', error);
      })
      
  }, [query]);
    const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <section className="character-list">
      <form>
        <input 
          
          type = 'text'
          onChange = {handleChange}
          value = {query}
          placeholder = 'search'
          
          />
      </form>
      {data.map(data => {
          return (
            <div key = {data.id}>
              <h2>Name: {data.name}</h2>
              <h3>Status: {data.status}</h3>
            </div>
          )
        })}
      
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
     
    </section>
  );
}
