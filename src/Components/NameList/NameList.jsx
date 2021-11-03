import React from 'react';





const NameList = (props) => {
      
    

    return ( 
        <div>
            {props.name.map((element)=><ol>{element}</ol>)}
        </div>


     );
}
 
export default NameList;