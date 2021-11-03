import React from 'react';
import './SuperheroTable.css';


const SuperheroTable = (props) => {
    return ( 
        <div>
    <table  className='table table1 table-bordered table-dark'>
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Primary Ability</th>
            <th scope="col">Secondary Ability</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               
            <th scope="row"><h4>{props.heros.map((element)=><div>{element.superheroId}</div> )}</h4></th>
            <th scope="row"><h4>{props.heros.map((element)=><div>{element.name}</div> )}</h4></th>
            <th scope="row"><h4>{props.heros.map((element)=><div>{element.primaryAbility}</div> )}</h4></th>
            <th scope="row"><h4>{props.heros.map((element)=><div>{element.secondaryAbility}</div> )}</h4></th>
            </tr>
            
        </tbody>
    </table>
           
        </div>
    );
} 
 


export default SuperheroTable;
 