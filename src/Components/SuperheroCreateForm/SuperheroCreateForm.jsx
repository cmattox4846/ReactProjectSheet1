import React, { Component } from 'react';




class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            superheroId: this.props.arrayNumber,
            name: '',
            primaryAbility: '',
            secondaryAbility: ''



        }
    }
    handleChange=(event)=>{
        let errors = this.state.errors;

        switch(event.target.name){
            case'name':
                errors.name= event.target.value.length <2 ? "Name needs to be more then 2 Characters" :null;
                break;
            case'primaryAbility':
                errors.primaryAbility= event.target.value.length <2 ? "Name needs to be more then 2 Characters" :null;
                break;
            case'secondaryAbility':
                errors.secondaryAbility= event.target.value.length <2 ? "Name needs to be more then 2 Characters" :null;
                break;
            default:
                break;

        }

        this.setState({
            [event.target.name]:event.target.value,
            [event.target.name]:this.superheroId
        });
        
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        
        this.props.newHero(this.state)
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <label>ID</label>
                <input name='superheroId' onLoad={this.handleChange} value={this.state.superheroId} readOnly/>
                <label>Name</label>
                <input name='name' onChange={this.handleChange} value={this.state.name}/>
                <label>Primary Ability</label>
                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility}/>
                <label>Secondary Ability</label>
                <input name='secondaryAbility' onChange={this.handleChange} value={this.state.secondaryAbility}/>
                <button type="submit">Create</button>
                

            </form>

          );
    }
}
 
export default SuperheroCreateForm;