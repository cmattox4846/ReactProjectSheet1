import React from 'react';


const AlertUser = (props) => {
    return (  
        <div>
           <button onClick={props.alert}>Where we at!</button>
        </div>

    );
}
 
export default AlertUser;