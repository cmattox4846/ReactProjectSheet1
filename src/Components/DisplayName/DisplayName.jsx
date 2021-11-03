import React from 'react';
import './DisplayName.css'

const DisplayName = (props) => {
    return (
    <div className="nav"><h1>First Name: {props.firstName} Last Name: {props.lastName}</h1> </div> );
}
 
export default DisplayName ;

