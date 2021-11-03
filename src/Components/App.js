import React, { Component} from 'react';
import AlertUser from './AlertUser/AlertUser';

import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';
import SuperheroTable from './SuperheroTable/SuperheroTable';


class App extends Component {

            state = { 
                firstName: 'Reggie',
                lastName: 'White',
                names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
                superheroes : [
                    {
                        superheroId: 1,
                        name: 'Batman',
                        primaryAbility: 'Wealthy',
                        secondaryAbility: 'Rich'
                    },
                    {
                        superheroId: 2,
                        name: 'Superman',
                        primaryAbility: 'Super strength',
                        secondaryAbility: 'Fly'
                    },
                    {
                        superheroId: 3,
                        name: 'Spiderman',
                        primaryAbility: 'Spider senses',
                        secondaryAbility: 'Shoots web'
                    }
                ]
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
            <SuperheroTable heros={this.state.superheroes}/>
            </div>
         );
    }
}
 
export default App;