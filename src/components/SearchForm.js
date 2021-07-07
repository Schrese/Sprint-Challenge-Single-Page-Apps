import React, { useState, useEffect } from "react";
// import CharacterList from './CharacterList';
import axios from "axios";


export default function SearchForm() {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');
  

  const handleChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const characters = response.data.results.filter(character => 
          character.name.toLowerCase().includes(query.toLowerCase())
          )
          console.log(response)
          setSearch(characters)
          
      });
  }, [query])
  return (
    <section className="search-form">
      <div>
        <form>
          <input
            type = 'text'
            onChange = {handleChange}
            value = {query}
            placeholder = 'search' 
            name = 'name'
            />
        </form>
        <div>
          {search.map(data => {
            return (
              <div key = {data.id}>
                <h2>{data.name}</h2>
              </div>
            )
          })}
        </div>
      </div>

     {/* // Add a search form here */}
    </section>
  );
}
