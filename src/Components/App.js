import React, { Component } from 'react';

import DisplayName from './DisplayName/DisplayName';
import NameList from './NameList/NameList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: 'Reggie',
            lastName: 'White',

            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],

            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ]
         }
    }

    findNameIndex=()=>{
        for(let i=0;i<this.state.names.length;i++){
            let nameIndex= this.state.names[i]
        }
        return nameIndex
    }


    render() { 
        return ( 
            <DisplayName firstName = {this.state.firstName} lastName={this.state.lastName}/>
            <NameList firstName = {this.state.names[1]}/>

         );
    }
}
 
export default App;