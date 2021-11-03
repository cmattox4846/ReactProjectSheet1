import React, { Component} from 'react';
import AlertUser from './AlertUser/AlertUser';

import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';


class App extends Component {

            state = { 
                firstName: 'Reggie',
                lastName: 'White',
                names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
                nameIndex: 0,
            }
    
    AlertUser =()=>{
        let alertMessage = alert('devCodeCamp')

        return alertMessage
    }
  


    render() { 
        return ( 
            <div>
            <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
            <NameList name={this.state.names} />
            <AlertUser alert= {this.AlertUser}/>
            </div>
         );
    }
}
 
export default App;