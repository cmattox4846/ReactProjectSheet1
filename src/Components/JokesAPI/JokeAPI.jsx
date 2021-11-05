import React from 'react';


const JokeAPI = (props) => {
    return ( 
        <div>
            <h1> {props.joke[0].setup}</h1>
            <h1> {props.joke[0].delivery}</h1>
            <button onClick={()=>props.getNewJoke()}>Get a Joke</button>
        </div>
    )
}
 
export default JokeAPI;