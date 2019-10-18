import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Toast, ToastBody, ToastHeader} from 'reactstrap';


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([])
 
  
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results)
        setData(response.data.results)
        // const something = response.data.results;
        // console.log(something);
        
      })
      .catch(error => {
        console.log('there was an error', error);
      })
      
  }, []);
   


  return (
    <section className="character-list">
      
      {data.map(data => {
          return (
            <div key = {data.id} className = 'p-3 my-2 rounded'>
              <Toast>
                <ToastHeader>Name: {data.name}</ToastHeader>
                <ToastBody>Status: {data.status}</ToastBody>
              </Toast>
              {/* <h2>Name: {data.name}</h2>
              <h3>Status: {data.status}</h3> */}
            </div>
          )
        })}
      
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
     
    </section>
  );
}
