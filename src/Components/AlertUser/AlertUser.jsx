import React from 'react';


const AlertUser = (props) => {
    return (  
        <div>
           <button type="button" class="btn btn-primary" onClick={props.alert}>Where we at!</button>
        </div>

    );
}
 
export default AlertUser;